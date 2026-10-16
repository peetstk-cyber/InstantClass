import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { Maximize2 } from "lucide-react";

interface Bone3DMiniPreviewProps {
  modelUrl: string;
  darkMode: boolean;
  onOpenFull: () => void;
  className?: string;
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

/**
 * Minimalist Glassmorphic 3D Bone Mini Preview
 * Displays a slowly auto-rotating 3D bone model with zero clutter.
 * - Pure minimalism: No descriptions or labels
 * - Strict White & Green (Teal/Emerald) theme
 * - Top-right expand icon button only (no signals or status dots)
 * - In-theme hover effect (subtle green glow & gentle speedup)
 * - Drag-to-rotate support with click-to-expand disambiguation
 * - Automatic medical coordinate alignment & bounding-box framing
 * - Robust error handling & safe WebGL disposal
 */
export function Bone3DMiniPreview({
  modelUrl,
  darkMode,
  onOpenFull,
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
  const rotSpeedRef = useRef(0.006);
  const targetSpeedRef = useRef(0.006);

  useEffect(() => {
    targetSpeedRef.current = isHovered ? 0.012 : 0.006;
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
      // 1. Scene & Camera Setup
      scene = new THREE.Scene();

      const width = container.clientWidth || 300;
      const height = container.clientHeight || 176;

      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      camera.position.set(0, 0, 5);

      // 2. Renderer with transparent background
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);

      // 3. Clean Biological Lighting (Strictly White & Green/Teal theme)
      const ambientLight = new THREE.AmbientLight(0xffffff, darkMode ? 0.75 : 0.85);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 0.9);
      keyLight.position.set(3, 6, 5);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xffffff, 0.35);
      fillLight.position.set(-4, -2, 3);
      scene.add(fillLight);

      // Subtle in-theme rim light (Emerald/Cyan)
      const rimLight = new THREE.DirectionalLight(darkMode ? 0x00CED1 : 0x0F766E, 0.25);
      rimLight.position.set(0, 4, -4);
      scene.add(rimLight);

      // 4. Model Container Group
      const modelGroup = new THREE.Group();
      scene.add(modelGroup);
      modelGroupRef.current = modelGroup;

      // 5. Model Setup Callback
      const handleModelReady = (loadedObj: THREE.Object3D) => {
        if (isDisposed || !scene) return;

        try {
          // Reorient medical coordinate system if model is Z-up
          const initBox = new THREE.Box3().setFromObject(loadedObj);
          const initSize = initBox.getSize(new THREE.Vector3());
          if (initSize.z > initSize.y && initSize.z > initSize.x) {
            loadedObj.rotation.x = -Math.PI / 2;
          }
          loadedObj.updateMatrixWorld(true);

          // Custom organic bone material adhering to White theme
          const boneMat = new THREE.MeshStandardMaterial({
            color: darkMode ? 0xF1F5F9 : 0xFDFBF7,
            roughness: 0.36,
            metalness: 0.02,
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

          // Center model at (0, 0, 0)
          const box = new THREE.Box3().setFromObject(loadedObj);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          loadedObj.position.sub(center);
          loadedObj.updateMatrixWorld(true);
          modelGroup.add(loadedObj);

          // Optimal camera distance to fit within view
          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 0) {
            const fovRad = (camera.fov * Math.PI) / 360;
            const fitDistance = (maxDim / 2) / Math.tan(fovRad) * 1.35;
            camera.position.set(0, maxDim * 0.08, fitDistance);
            camera.lookAt(0, 0, 0);
          }

          // Subtle initial tilt for anatomical elegance
          modelGroup.rotation.x = 0.08;
          modelGroup.rotation.z = -0.04;

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
  }, [modelUrl, darkMode]);

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
        background: darkMode ? "rgba(22, 27, 39, 0.65)" : "rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderColor: isHovered
          ? (darkMode ? "rgba(0, 206, 209, 0.45)" : "rgba(15, 118, 110, 0.4)")
          : (darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"),
        boxShadow: isHovered
          ? (darkMode ? "0 6px 24px rgba(0, 206, 209, 0.16)" : "0 6px 24px rgba(15, 118, 110, 0.12)")
          : (darkMode ? "0 4px 18px rgba(0, 0, 0, 0.22)" : "0 4px 18px rgba(0, 0, 0, 0.03)"),
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
          background: darkMode ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.04)",
          border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)"}`,
          color: isHovered
            ? (darkMode ? "#00CED1" : "#0F766E")
            : (darkMode ? "#94A3B8" : "#64748B"),
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
