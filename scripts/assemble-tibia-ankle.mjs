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

  const geom = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry;
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

async function assemble() {
  const dir = "public/models/bones/tibia";
  console.log("Loading anatomical bone OBJ files...");

  const tibiaMesh = loadObjMesh(path.join(dir, "Tibia.obj"), "tibia");
  const fibulaMesh = loadObjMesh(path.join(dir, "Fibula.obj"), "fibula");
  const talusMesh = loadObjMesh(path.join(dir, "Talus.obj"), "talus");
  const calcaneusMesh = loadObjMesh(path.join(dir, "Calcaneus.obj"), "calcaneus");
  const navicularMesh = loadObjMesh(path.join(dir, "Navicular.obj"), "navicular");
  const cuboidMesh = loadObjMesh(path.join(dir, "cuboid.obj"), "cuboid");

  console.log("Bone vertex counts:");
  console.log(" - Tibia:", tibiaMesh.geometry.attributes.position.count);
  console.log(" - Fibula:", fibulaMesh.geometry.attributes.position.count);
  console.log(" - Talus:", talusMesh.geometry.attributes.position.count);
  console.log(" - Calcaneus:", calcaneusMesh.geometry.attributes.position.count);
  console.log(" - Navicular:", navicularMesh.geometry.attributes.position.count);
  console.log(" - Cuboid:", cuboidMesh.geometry.attributes.position.count);

  const group = new THREE.Group();
  group.name = "tibia_ankle_skeleton";
  group.add(tibiaMesh);
  group.add(fibulaMesh);
  group.add(talusMesh);
  group.add(calcaneusMesh);
  group.add(navicularMesh);
  group.add(cuboidMesh);

  console.log("Exporting to binary GLB...");
  const exporter = new GLTFExporter();
  exporter.parse(
    group,
    (gltf) => {
      const outputPath = path.join(dir, "tibia.glb");
      fs.writeFileSync(outputPath, Buffer.from(gltf));
      const stats = fs.statSync(outputPath);
      console.log(`Successfully assembled tibia.glb: ${(stats.size / 1024).toFixed(1)} KB`);
    },
    (err) => {
      console.error("Export error:", err);
      process.exit(1);
    },
    { binary: true }
  );
}

assemble().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
