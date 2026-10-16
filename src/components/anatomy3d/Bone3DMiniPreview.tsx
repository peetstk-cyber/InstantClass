import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { Maximize2 } from "lucide-react";

interface Bone3DMiniPreviewProps {
  modelUrl: string;
  darkMode: boolean;
  onOpenFull: () => void;
  boneId?: string;
  regionId?: string;
  className?: string;
}

interface SubregionPivotConfig {
  pivot: [number, number, number];
  distance: number;
  tiltX?: number;
  tiltY?: number;
  tiltZ?: number;
}

/**
 * Check if WebGL is supported by the client browser
 */
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

// Exact anatomical AC joint coordinates on Scapula & Clavicle (untransformed base positions)
const _conoidScapula = new THREE.Vector3(-38.32, 54.44, 15.46);
const _trapScapula = new THREE.Vector3(-47.06, 59.64, 27.65);
const _acScapula = new THREE.Vector3(-56.05, 75.92, -5.08);
const _caCoracoid = new THREE.Vector3(-44.69, 53.22, 31.92);
const _caAcromion = new THREE.Vector3(-65.93, 76.69, 7.51);

const _conoidClavicleRaw = new THREE.Vector3(-35.38, 76.52, -16.13);
const _trapClavicleRaw = new THREE.Vector3(-45.41, 75.94, -15.63);
const _acClavicleRaw = new THREE.Vector3(-54.91, 76.63, -5.44);

function createLigamentSegment(
  start: THREE.Vector3,
  end: THREE.Vector3,
  width: number,
  thickness: number,
  mat: THREE.Material,
  faceNormal?: THREE.Vector3
): THREE.Mesh {
  const boxGeom = new THREE.BoxGeometry(1, 1, 1);
  const mesh = new THREE.Mesh(boxGeom, mat);

  const dir = new THREE.Vector3().subVectors(end, start);
  const len = dir.length();
  if (len < 0.001) return mesh;

  const mid = new THREE.Vector3().copy(start).addScaledVector(dir, 0.5);
  mesh.position.copy(mid);
  dir.normalize();

  let out = faceNormal ? faceNormal.clone().normalize() : new THREE.Vector3(0, 1, 0);
  if (Math.abs(dir.dot(out)) > 0.95) {
    out = new THREE.Vector3(0, 0, 1);
    if (Math.abs(dir.dot(out)) > 0.95) {
      out = new THREE.Vector3(1, 0, 0);
    }
  }

  const binormal = new THREE.Vector3().crossVectors(dir, out).normalize();
  const normal = new THREE.Vector3().crossVectors(binormal, dir).normalize();

  const basis = new THREE.Matrix4().makeBasis(binormal, dir, normal);
  mesh.quaternion.setFromRotationMatrix(basis);
  mesh.scale.set(width, len, thickness);

  return mesh;
}

/**
 * Returns the exact 3D anatomical pivot coordinate (in centered mm space)
 * and camera zoom/tilt configuration for any targeted bone subregion.
 */
function getSubregionConfig(boneId?: string, regionId?: string): SubregionPivotConfig {
  const b = (boneId || "").toLowerCase();
  const r = (regionId || "").toLowerCase().replace(/_/g, "-");

  // Clavicle Subregions
  if (b.includes("clavicle")) {
    if (r.includes("ac") || r.includes("rockwood")) {
      return { pivot: [-55.5, 76.3, -5.3], distance: 1.85, tiltX: 0.06, tiltZ: -0.02 };
    }
    if (r.includes("shaft") || r.includes("robinson")) {
      return { pivot: [10.0, 65.0, 37.0], distance: 2.10, tiltX: 0.08, tiltZ: -0.04 };
    }
    if (r.includes("distal") || r.includes("neer")) {
      return { pivot: [-28.0, 72.0, -10.0], distance: 1.90, tiltX: 0.06, tiltZ: -0.02 };
    }
  }

  // Femur Subregions
  if (b.includes("femur")) {
    if (r.includes("neck") || r.includes("garden")) {
      return { pivot: [-12.5, 206.0, 0.0], distance: 1.80, tiltX: 0.04, tiltY: 0.15 };
    }
    if (r.includes("intertroch") || r.includes("evans")) {
      return { pivot: [-29.0, 162.0, -10.0], distance: 1.80, tiltX: 0.04, tiltY: 0.15 };
    }
    if (r.includes("subtroch") || r.includes("seinsheimer")) {
      return { pivot: [-18.0, 120.0, 0.0], distance: 1.90, tiltX: 0.04, tiltY: 0.10 };
    }
    if (r.includes("shaft") || r.includes("winquist")) {
      return { pivot: [-10.0, -10.0, 10.0], distance: 2.30, tiltX: 0.06, tiltZ: -0.03 };
    }
    if (r.includes("distal") || r.includes("supracondylar") || r.includes("hoffa")) {
      return { pivot: [10.0, -170.0, 0.0], distance: 1.85, tiltX: 0.08, tiltY: -0.05 };
    }
  }

  // Humerus Subregions
  if (b.includes("humerus")) {
    if (r.includes("proximal") || r.includes("neer")) {
      return { pivot: [15.0, 95.0, 3.0], distance: 1.75, tiltX: 0.05, tiltY: -0.20 };
    }
    if (r.includes("shaft")) {
      return { pivot: [-6.9, 0.0, -4.7], distance: 2.10, tiltX: 0.06, tiltZ: -0.03 };
    }
    if (r.includes("distal")) {
      return { pivot: [-23.3, -120.0, -11.8], distance: 1.75, tiltX: 0.08, tiltY: 0.0 };
    }
  }

  // Patella Subregion
  if (b.includes("patella")) {
    return { pivot: [-4.2, 9.7, 32.8], distance: 1.65, tiltX: 0.10, tiltY: 0.0 };
  }

  // Tibia Subregions
  if (b.includes("tibia")) {
    if (r.includes("proximal") || r.includes("schatzker") || r.includes("plateau")) {
      return { pivot: [0.0, 175.0, 0.0], distance: 1.85, tiltX: 0.18, tiltY: 0.0 };
    }
    if (r.includes("pilon")) {
      return { pivot: [0.0, -145.0, 0.0], distance: 1.60, tiltX: 0.10, tiltY: -0.20 };
    }
    if (r.includes("distal") || r.includes("ankle") || r.includes("mortise")) {
      return { pivot: [0.0, -155.0, 0.0], distance: 1.65, tiltX: 0.08, tiltY: -0.30 };
    }
    if (r.includes("shaft")) {
      return { pivot: [0.0, 0.0, 0.0], distance: 2.25, tiltX: 0.06, tiltZ: -0.02 };
    }
  }

  // Foot Subregions
  if (b.includes("foot")) {
    if (r.includes("talus") || r.includes("hawkins")) {
      return { pivot: [8.51, -171.40, -5.48], distance: 1.50, tiltX: 0.06, tiltY: 0.80 };
    }
    if (r.includes("calcaneus") || r.includes("essex")) {
      return { pivot: [5.30, -183.46, -14.19], distance: 1.45, tiltX: 0.06, tiltY: -0.80 };
    }
    if (r.includes("fifth") || r.includes("metatarsal")) {
      return { pivot: [-15.0, -185.0, -15.0], distance: 1.55, tiltX: 0.15, tiltY: -0.40 };
    }
    return { pivot: [0.0, -180.0, -10.0], distance: 1.60, tiltX: 0.15 };
  }

  // Pelvis Subregions
  if (b.includes("pelvis")) {
    if (r.includes("acetabulum") || r.includes("judet")) {
      return { pivot: [-70.4, -29.8, 26.5], distance: 1.90, tiltX: 0.10, tiltY: 0.30 };
    }
    return { pivot: [0.0, 0.0, 0.0], distance: 2.60, tiltX: 0.15, tiltY: 0.0 };
  }

  // Fallback: Geometric Center
  return { pivot: [0.0, 0.0, 0.0], distance: 2.60, tiltX: 0.08, tiltZ: -0.04 };
}

/**
 * Minimalist Glassmorphic 3D Bone Mini Preview
 * - Clean Gray Canvas background for high anatomical contrast
 * - Pure minimalism: No descriptions or labels
 * - Strict White & Green (Teal/Emerald) theme
 * - Top-right expand icon button only (no signals or status dots)
 * - In-theme hover effect (subtle green glow & gentle speedup)
 * - Drag-to-rotate support with click-to-expand disambiguation
 * - Support for rotating dynamically around the active subregion pivot across all bones
 * - Automatic medical coordinate alignment & scale normalization
 */
export function Bone3DMiniPreview({
  modelUrl,
  darkMode,
  onOpenFull,
  boneId,
  regionId,
  className = "",
}: Bone3DMiniPreviewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Drag interaction tracking to avoid triggering click-to-expand on drag
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hasDraggedRef = useRef(false);

  // Three.js refs
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const rotSpeedRef = useRef(0.0012);
  const targetSpeedRef = useRef(0.0012);

  useEffect(() => {
    targetSpeedRef.current = isHovered ? 0.0028 : 0.0012;
  }, [isHovered]);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setHasError(true);
      setLoading(false);
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId: number;
    let isDisposed = false;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;

    try {
      const subCfg = getSubregionConfig(boneId, regionId);
      const isAcJoint = (boneId || "").toLowerCase().includes("clavicle") &&
        ((regionId || "").toLowerCase().includes("ac") || (regionId || "").toLowerCase().includes("rockwood"));

      // 1. Scene & Camera Setup
      scene = new THREE.Scene();

      const width = container.clientWidth || 300;
      const height = container.clientHeight || 176;

      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      camera.position.set(0, 0.05, subCfg.distance);
      camera.lookAt(0, 0, 0);

      // 2. Renderer with solid Gray background matching user request
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: false,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      // Solid medical gray background
      renderer.setClearColor(darkMode ? 0x1E293B : 0xE2E8F0, 1);

      // 3. 3-Point Lighting for crisp anatomical contrast
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 1.25);
      keyLight.position.set(4, 7, 5);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
      fillLight.position.set(-4, -2, 3);
      scene.add(fillLight);

      // Subtle in-theme rim light (Teal/Emerald)
      const rimLight = new THREE.DirectionalLight(darkMode ? 0x00CED1 : 0x0F766E, 0.35);
      rimLight.position.set(0, 4, -4);
      scene.add(rimLight);

      // 4. Model Container Group (handles turntable rotation around its (0, 0, 0) origin)
      const modelGroup = new THREE.Group();
      scene.add(modelGroup);
      modelGroupRef.current = modelGroup;

      // 5. Model Setup Callback with Normalized Scale and Centered Wrapper
      const handleModelReady = (loadedObj: THREE.Object3D) => {
        if (isDisposed || !scene) return;

        try {
          // Step A: Reorient medical coordinate system if model is Z-up (DICOM/CT convention)
          const initBox = new THREE.Box3().setFromObject(loadedObj);
          const initSize = initBox.getSize(new THREE.Vector3());
          if (initSize.z > initSize.y && initSize.z > initSize.x) {
            loadedObj.rotation.x = -Math.PI / 2;
          }
          loadedObj.updateMatrixWorld(true);

          // Step B: Center geometric center to (0, 0, 0) so all anatomical coordinates match
          const geomBox = new THREE.Box3().setFromObject(loadedObj);
          const geomCenter = geomBox.getCenter(new THREE.Vector3());
          const geomSize = geomBox.getSize(new THREE.Vector3());
          loadedObj.position.sub(geomCenter);
          loadedObj.updateMatrixWorld(true);

          // Step C: Pure white organic cortical bone material
          const boneMat = new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            roughness: 0.30,
            metalness: 0.04,
            side: THREE.DoubleSide,
          });

          loadedObj.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const m = child as THREE.Mesh;
              m.material = boneMat;
              m.castShadow = false;
              m.receiveShadow = false;
            }
          });

          // Step D: If AC Joint (Rockwood), add intact anatomical ligaments in centered space
          if (isAcJoint) {
            const ligamentMat = new THREE.MeshStandardMaterial({
              color: darkMode ? 0xCBD5E1 : 0x94A3B8,
              roughness: 0.35,
              metalness: 0.05,
              transparent: true,
              opacity: 0.85,
              depthWrite: false,
              side: THREE.DoubleSide,
            });

            loadedObj.add(createLigamentSegment(_conoidScapula, _conoidClavicleRaw, 8.0, 2.6, ligamentMat, new THREE.Vector3(0, 0.3, 0.95)));
            loadedObj.add(createLigamentSegment(_trapScapula, _trapClavicleRaw, 8.5, 2.6, ligamentMat, new THREE.Vector3(-0.4, 0.2, 0.89)));
            loadedObj.add(createLigamentSegment(_acScapula, _acClavicleRaw, 6.5, 2.4, ligamentMat, new THREE.Vector3(0, 0.6, 0.8)));
            loadedObj.add(createLigamentSegment(_caCoracoid, _caAcromion, 7.5, 2.2, ligamentMat, new THREE.Vector3(0, 0.7, 0.7)));
          }

          // Step E: Wrapper group for rotation pivot & scale normalization
          const wrapper = new THREE.Group();

          // Anchor the rotation pivot directly at the active subregion!
          // Since loadedObj is centered at (0, 0, 0), subtracting subCfg.pivot shifts
          // that exact anatomical subregion to (0, 0, 0) of wrapper.
          const pivotVec = new THREE.Vector3(...subCfg.pivot);
          loadedObj.position.sub(pivotVec);
          wrapper.add(loadedObj);

          // Normalize scale so largest dimension is exactly 2.6 units
          const maxDim = Math.max(geomSize.x, geomSize.y, geomSize.z);
          if (maxDim > 0) {
            const targetDim = 2.6;
            const scale = targetDim / maxDim;
            wrapper.scale.setScalar(scale);
          }

          modelGroup.add(wrapper);

          // Subtle initial anatomical tilt from subregion config
          modelGroup.rotation.x = subCfg.tiltX ?? 0.08;
          modelGroup.rotation.y = subCfg.tiltY ?? 0.0;
          modelGroup.rotation.z = subCfg.tiltZ ?? (isAcJoint ? -0.02 : -0.04);

          setLoading(false);
        } catch (e) {
          console.error("Error setting up loaded 3D model:", e);
          setLoading(false);
        }
      };

      const isGlb = modelUrl.toLowerCase().includes(".glb");
      setLoading(true);

      if (isGlb) {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load(
          modelUrl,
          (gltf) => handleModelReady(gltf.scene),
          undefined,
          (err) => {
            if (isDisposed) return;
            console.warn("Failed to load 3D GLB model:", err);
            setLoading(false);
          }
        );
      } else {
        const objLoader = new OBJLoader();
        objLoader.load(
          modelUrl,
          (obj) => handleModelReady(obj),
          undefined,
          (err) => {
            if (isDisposed) return;
            console.warn("Failed to load 3D OBJ model:", err);
            setLoading(false);
          }
        );
      }

      // 6. Smooth Turntable Render Loop
      const render = () => {
        if (isDisposed || !renderer || !scene) return;

        rotSpeedRef.current += (targetSpeedRef.current - rotSpeedRef.current) * 0.05;

        if (modelGroupRef.current && !isDraggingRef.current) {
          modelGroupRef.current.rotation.y += rotSpeedRef.current;
        }

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(render);
      };

      render();

      // 7. Responsive ResizeObserver
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width: newW, height: newH } = entry.contentRect;
          if (newW > 0 && newH > 0 && renderer) {
            camera.aspect = newW / newH;
            camera.updateProjectionMatrix();
            renderer.setSize(newW, newH, false);
          }
        }
      });

      resizeObserver.observe(container);

      // 8. Cleanup & Complete Disposal
      return () => {
        isDisposed = true;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        resizeObserver.disconnect();

        try {
          if (scene) {
            const disposedMats = new Set<THREE.Material>();
            scene.traverse((obj) => {
              if ((obj as THREE.Mesh).isMesh) {
                const mesh = obj as THREE.Mesh;
                if (mesh.geometry) mesh.geometry.dispose();
                if (mesh.material) {
                  const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
                  mats.forEach((m) => {
                    if (!disposedMats.has(m)) {
                      disposedMats.add(m);
                      m.dispose();
                    }
                  });
                }
              }
            });
          }

          if (renderer) {
            renderer.dispose();
          }
        } catch (e) {
          console.warn("3D cleanup warning:", e);
        }

        modelGroupRef.current = null;
      };
    } catch (e) {
      console.error("Error initializing 3D preview:", e);
      setHasError(true);
      setLoading(false);
    }
  }, [modelUrl, darkMode, boneId, regionId]);

  if (hasError) {
    return null;
  }

  // Pointer drag interactions
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !modelGroupRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      hasDraggedRef.current = true;
    }

    modelGroupRef.current.rotation.y += dx * 0.01;
    modelGroupRef.current.rotation.x += dy * 0.008;

    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleClick = () => {
    if (hasDraggedRef.current) return;
    onOpenFull();
  };

  // Gray theme background styles requested by user
  const grayBg = darkMode ? "#1E293B" : "#E2E8F0";
  const grayBorder = isHovered
    ? (darkMode ? "rgba(0, 206, 209, 0.45)" : "rgba(15, 118, 110, 0.45)")
    : (darkMode ? "#334155" : "#CBD5E1");

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        isDraggingRef.current = false;
      }}
      style={{
        background: grayBg,
        borderColor: grayBorder,
        boxShadow: isHovered
          ? (darkMode ? "0 6px 24px rgba(0, 206, 209, 0.16)" : "0 6px 24px rgba(15, 118, 110, 0.12)")
          : (darkMode ? "0 2px 10px rgba(0, 0, 0, 0.25)" : "0 2px 8px rgba(0, 0, 0, 0.04)"),
      }}
      className={`relative w-full h-44 rounded-2xl border overflow-hidden cursor-pointer select-none group transition-all duration-300 ease-out flex-shrink-0 ${className}`}
      title="Click to view full 3D"
    >
      {/* Loading Spinner (Minimalist Green Ring) */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div
            className="w-5 h-5 rounded-full border-2 animate-spin"
            style={{
              borderColor: darkMode ? "rgba(0, 206, 209, 0.2)" : "rgba(15, 118, 110, 0.2)",
              borderTopColor: darkMode ? "#00CED1" : "#0F766E",
            }}
          />
        </div>
      )}

      {/* Top-Right Expand Icon Button (Minimalism: No text, no signals) */}
      <div
        className="absolute top-2.5 right-2.5 z-20 w-6 h-6 rounded-md flex items-center justify-center transition-all duration-200"
        style={{
          background: darkMode ? "rgba(255, 255, 255, 0.08)" : "#FFFFFF",
          border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.12)" : "#CBD5E1"}`,
          color: isHovered
            ? (darkMode ? "#00CED1" : "#0F766E")
            : (darkMode ? "#94A3B8" : "#64748B"),
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <Maximize2
          size={12}
          className="transition-transform duration-200 group-hover:scale-110"
        />
      </div>

      {/* 3D WebGL Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
