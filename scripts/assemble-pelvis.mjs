import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import * as THREE from "three";
import fs from "fs";
import path from "path";

globalThis.FileReader = class FileReader {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((buf) => {
      this.result = buf;
      if (this.onloadend) this.onloadend();
      if (this.onload) this.onload();
    });
  }
};

const objLoader = new OBJLoader();

function loadObjMesh(filePath, meshName) {
  const content = fs.readFileSync(filePath, "utf-8");
  const obj = objLoader.parse(content);
  let mesh = null;
  obj.traverse((c) => {
    if (c.isMesh && !mesh) mesh = c;
  });
  if (!mesh) throw new Error("No mesh found in " + filePath);

  const geom = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
  geom.computeVertexNormals();

  const standardMesh = new THREE.Mesh(
    geom,
    new THREE.MeshStandardMaterial({
      color: 0xf7f4ec,
      roughness: 0.35,
      metalness: 0.04,
      side: THREE.DoubleSide,
    })
  );
  standardMesh.name = meshName;
  return standardMesh;
}

async function assemblePelvis() {
  const dir = "public/models/bones/pelvis";
  console.log("Loading pelvis component OBJ files...");

  const leftPelvisMesh = loadObjMesh(path.join(dir, "Left Pelvis.obj"), "left_pelvis");
  const rightPelvisMesh = loadObjMesh(path.join(dir, "Right Pelvis.obj"), "right_pelvis");
  const sacrumMesh = loadObjMesh(path.join(dir, "Sacrum.obj"), "sacrum");

  console.log("Pelvis component vertex counts:");
  console.log(" - Left Pelvis: ", leftPelvisMesh.geometry.attributes.position.count);
  console.log(" - Right Pelvis:", rightPelvisMesh.geometry.attributes.position.count);
  console.log(" - Sacrum:      ", sacrumMesh.geometry.attributes.position.count);

  // Group raw components
  const rawGroup = new THREE.Group();
  rawGroup.add(leftPelvisMesh);
  rawGroup.add(rightPelvisMesh);
  rawGroup.add(sacrumMesh);

  // Calculate raw anatomical bounding box & center
  const rawBox = new THREE.Box3().setFromObject(rawGroup);
  const rawCenter = rawBox.getCenter(new THREE.Vector3());
  const rawSize = rawBox.getSize(new THREE.Vector3());
  console.log("\nRaw Anatomical Bounding Box:");
  console.log(` - Min: [${rawBox.min.x.toFixed(2)}, ${rawBox.min.y.toFixed(2)}, ${rawBox.min.z.toFixed(2)}]`);
  console.log(` - Max: [${rawBox.max.x.toFixed(2)}, ${rawBox.max.y.toFixed(2)}, ${rawBox.max.z.toFixed(2)}]`);
  console.log(` - Center: [${rawCenter.x.toFixed(2)}, ${rawCenter.y.toFixed(2)}, ${rawCenter.z.toFixed(2)}]`);
  console.log(` - Size: Width(X)=${rawSize.x.toFixed(1)}mm, Depth(Y)=${rawSize.y.toFixed(1)}mm, Height(Z)=${rawSize.z.toFixed(1)}mm`);

  // Transform matrix: Rotate -90° around X axis (Z-up cranial -> Y-up cranial, -Y anterior -> +Z anterior)
  // then translate to geometric center (0, 0, 0)
  const rotMatrix = new THREE.Matrix4().makeRotationX(-Math.PI / 2);
  const rotatedCenter = rawCenter.clone().applyMatrix4(rotMatrix);
  const transMatrix = new THREE.Matrix4().makeTranslation(-rotatedCenter.x, -rotatedCenter.y, -rotatedCenter.z);
  const finalMatrix = new THREE.Matrix4().multiplyMatrices(transMatrix, rotMatrix);

  // Apply matrix directly to each geometry
  [leftPelvisMesh, rightPelvisMesh, sacrumMesh].forEach((mesh) => {
    mesh.geometry.applyMatrix4(finalMatrix);
    mesh.geometry.computeVertexNormals();
  });

  // Verify assembled bounding box
  const assembledGroup = new THREE.Group();
  assembledGroup.name = "pelvis_assembly";
  assembledGroup.add(leftPelvisMesh);
  assembledGroup.add(rightPelvisMesh);
  assembledGroup.add(sacrumMesh);

  const assembledBox = new THREE.Box3().setFromObject(assembledGroup);
  const assembledCenter = assembledBox.getCenter(new THREE.Vector3());
  const assembledSize = assembledBox.getSize(new THREE.Vector3());

  console.log("\nAssembled Anatomical Coordinates (Y-up, Z-anterior, Centered at Origin):");
  console.log(` - Min: [${assembledBox.min.x.toFixed(2)}, ${assembledBox.min.y.toFixed(2)}, ${assembledBox.min.z.toFixed(2)}]`);
  console.log(` - Max: [${assembledBox.max.x.toFixed(2)}, ${assembledBox.max.y.toFixed(2)}, ${assembledBox.max.z.toFixed(2)}]`);
  console.log(` - Center: [${assembledCenter.x.toFixed(2)}, ${assembledCenter.y.toFixed(2)}, ${assembledCenter.z.toFixed(2)}]`);
  console.log(` - Dimensions: Width(X)=${assembledSize.x.toFixed(1)}mm, Height(Y)=${assembledSize.y.toFixed(1)}mm, Depth(Z)=${assembledSize.z.toFixed(1)}mm`);

  // Export to binary GLTF (.glb)
  console.log("\nExporting assembled pelvis to binary GLB...");
  const exporter = new GLTFExporter();
  exporter.parse(
    assembledGroup,
    (gltf) => {
      const outputPath = path.join(dir, "pelvis.glb");
      fs.writeFileSync(outputPath, Buffer.from(gltf));
      const stats = fs.statSync(outputPath);
      console.log(`SUCCESS! Assembled pelvis.glb: ${(stats.size / 1024).toFixed(1)} KB at ${outputPath}`);
    },
    (err) => {
      console.error("GLTF Export error:", err);
      process.exit(1);
    },
    { binary: true }
  );
}

assemblePelvis().catch((err) => {
  console.error("Fatal assembly error:", err);
  process.exit(1);
});
