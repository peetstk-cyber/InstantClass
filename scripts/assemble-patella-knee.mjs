import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import * as THREE from "three";
import fs from "fs";

globalThis.FileReader = class FileReader {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then(buf => {
      this.result = buf;
      if (this.onloadend) this.onloadend();
      if (this.onload) this.onload();
    });
  }
};

const loader = new GLTFLoader();

function loadMesh(path) {
  return new Promise((resolve, reject) => {
    const buf = fs.readFileSync(path);
    loader.parse(
      buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength),
      "",
      (gltf) => {
        let m;
        gltf.scene.traverse((c) => {
          if (c.isMesh && !m) m = c;
        });
        if (m) resolve(m);
        else reject(new Error("No mesh found in " + path));
      },
      (err) => reject(err)
    );
  });
}

async function run() {
  console.log("Loading raw models...");
  const femurMeshRaw = await loadMesh("public/models/bones/patella/femur.glb");
  const tibiaMeshRaw = await loadMesh("public/models/bones/patella/tibia.glb");
  const patellaMeshRaw = await loadMesh("public/models/bones/patella/patella.glb");

  // 1. Crop Femur to distal knee region and apply 30° anatomical knee flexion
  console.log("Cropping and flexing femur to 30° flexion (matching clinical lateral radiograph)...");
  const fGeom = femurMeshRaw.geometry.index ? femurMeshRaw.geometry.toNonIndexed() : femurMeshRaw.geometry;
  const fPos = fGeom.attributes.position;
  
  const flexDeg = 30;
  const flexRad = (flexDeg * Math.PI) / 180;
  const hinge = new THREE.Vector3(-71.7, -78.0, 384.0);
  const rollbackY = 3.0;
  const offsetZ = 3.5;

  const fCroppedPos = [];
  for (let i = 0; i + 2 < fPos.count; i += 3) {
    const z0 = fPos.getZ(i), z1 = fPos.getZ(i + 1), z2 = fPos.getZ(i + 2);
    if (z0 <= 480 && z1 <= 480 && z2 <= 480) {
      for (let k = 0; k < 3; k++) {
        const x = fPos.getX(i + k), y = fPos.getY(i + k), z = fPos.getZ(i + k);
        const dy = y - hinge.y;
        const dz = z - hinge.z;
        const ry = dy * Math.cos(-flexRad) - dz * Math.sin(-flexRad) + hinge.y + rollbackY;
        const rz = dy * Math.sin(-flexRad) + dz * Math.cos(-flexRad) + hinge.z + offsetZ;
        fCroppedPos.push(x, ry, rz);
      }
    }
  }
  const croppedFemurGeom = new THREE.BufferGeometry();
  croppedFemurGeom.setAttribute("position", new THREE.Float32BufferAttribute(fCroppedPos, 3));
  croppedFemurGeom.computeVertexNormals();
  const femurMesh = new THREE.Mesh(croppedFemurGeom, new THREE.MeshStandardMaterial({ color: 0xf7f4ec }));
  femurMesh.name = "femur";

  // 2. Crop Tibia to proximal knee region (standing upright baseline)
  console.log("Cropping tibia to proximal knee region...");
  const tGeom = tibiaMeshRaw.geometry.index ? tibiaMeshRaw.geometry.toNonIndexed() : tibiaMeshRaw.geometry;
  const tPos = tGeom.attributes.position;
  const tCroppedPos = [];
  for (let i = 0; i + 2 < tPos.count; i += 3) {
    const z0 = tPos.getZ(i), z1 = tPos.getZ(i + 1), z2 = tPos.getZ(i + 2);
    if (z0 >= 280 && z1 >= 280 && z2 >= 280) {
      for (let k = 0; k < 3; k++) {
        tCroppedPos.push(tPos.getX(i + k), tPos.getY(i + k), tPos.getZ(i + k));
      }
    }
  }
  const croppedTibiaGeom = new THREE.BufferGeometry();
  croppedTibiaGeom.setAttribute("position", new THREE.Float32BufferAttribute(tCroppedPos, 3));
  croppedTibiaGeom.computeVertexNormals();
  const tibiaMesh = new THREE.Mesh(croppedTibiaGeom, new THREE.MeshStandardMaterial({ color: 0xf7f4ec }));
  tibiaMesh.name = "tibia";

  // 3. Orient and place Patella: flexed and hovering in front of the flexed trochlea
  console.log("Transforming and hovering patella into 30° flexed femoral trochlea...");
  const pGeom = patellaMeshRaw.geometry.index ? patellaMeshRaw.geometry.toNonIndexed() : patellaMeshRaw.geometry;
  const pPos = pGeom.attributes.position;
  const rawRidge = new THREE.Vector3(188.5, 201.4, -454.33);
  const rxDeg = -32;
  const euler = new THREE.Euler(rxDeg * Math.PI / 180, -1 * Math.PI / 180, 0, "XYZ");
  const q = new THREE.Quaternion().setFromEuler(euler);

  const pTransPos = [];
  for (let i = 0; i + 2 < pPos.count; i += 3) {
    const pts = [];
    for (let k = 0; k < 3; k++) {
      const rx = pPos.getX(i + k);
      const ry = pPos.getY(i + k);
      const rz = pPos.getZ(i + k);
      const mx = -(rx - rawRidge.x);
      const my = ry - rawRidge.y;
      const mz = rz - rawRidge.z;
      const v = new THREE.Vector3(mx, my, mz).applyQuaternion(q);
      v.x += -74.0;
      v.y += -110.0;
      v.z += 386.0;
      pts.push(v);
    }
    pTransPos.push(pts[0].x, pts[0].y, pts[0].z);
    pTransPos.push(pts[2].x, pts[2].y, pts[2].z);
    pTransPos.push(pts[1].x, pts[1].y, pts[1].z);
  }
  const transPatellaGeom = new THREE.BufferGeometry();
  transPatellaGeom.setAttribute("position", new THREE.Float32BufferAttribute(pTransPos, 3));
  transPatellaGeom.computeVertexNormals();
  const patellaMesh = new THREE.Mesh(transPatellaGeom, new THREE.MeshStandardMaterial({ color: 0xf7f4ec }));
  patellaMesh.name = "patella";

  console.log(`Summary of assembled components in 30° flexion:`);
  console.log(`- Patella vertices: ${patellaMesh.geometry.attributes.position.count}`);
  console.log(`- Femur vertices:   ${femurMesh.geometry.attributes.position.count}`);
  console.log(`- Tibia vertices:   ${tibiaMesh.geometry.attributes.position.count}`);

  const scene = new THREE.Scene();
  scene.add(patellaMesh);
  scene.add(femurMesh);
  scene.add(tibiaMesh);

  console.log("Exporting 30° flexed knee model to patella_knee.glb...");
  const exporter = new GLTFExporter();
  exporter.parse(
    scene,
    (result) => {
      const outPath = "public/models/bones/patella/patella_knee.glb";
      fs.writeFileSync(outPath, Buffer.from(result));
      const sizeKb = (fs.statSync(outPath).size / 1024).toFixed(1);
      console.log(`SUCCESS! Exported ${outPath} (${sizeKb} KB)`);
    },
    (err) => {
      console.error("Export error:", err);
    },
    { binary: true }
  );
}

run();
