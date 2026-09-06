import fs from 'node:fs';
import path from 'node:path';

const registryPath = path.resolve(process.cwd(), 'src/data/aiImageAuditRegistry.json');

if (!fs.existsSync(registryPath)) {
  console.error("❌ Registry not found at:", registryPath);
  process.exit(1);
}

const registry = JSON.parse(fs.readFileSync(registryPath, 'utf-8'));
const records = registry.records || [];

const pending = records.filter(r => r.status === 'pending_review');
const verified = records.filter(r => r.status === 'verified');
const rejected = records.filter(r => r.status === 'rejected');

console.log("\n=======================================================");
console.log("  🤖 AI-ADDED IMAGE AUDIT REGISTRY SUMMARY");
console.log("=======================================================");
console.log(`📁 Total AI Images   : ${records.length}`);
console.log(`⏳ Pending Review    : ${pending.length}`);
console.log(`✅ Verified          : ${verified.length}`);
console.log(`❌ Rejected          : ${rejected.length}`);
console.log("-------------------------------------------------------\n");

if (pending.length > 0) {
  console.log("🔍 IMAGES AWAITING ORTHOPEDIC CLINICAL REVIEW:");
  console.log("-------------------------------------------------------");
  pending.forEach((r, idx) => {
    console.log(`[${idx + 1}] ID: ${r.id}`);
    console.log(`    System     : ${r.system} (${r.type || 'N/A'})`);
    console.log(`    Bone/Region: ${r.boneName?.en || r.boneId} > ${r.regionName?.en || r.regionId}`);
    console.log(`    Image Path : ${r.imageUrl}`);
    console.log(`    Source     : ${r.source}`);
    console.log(`    Notes      : ${r.notes || 'None'}`);
    console.log(`    Added By   : ${r.addedBy} @ ${r.addedAt}`);
    console.log("-------------------------------------------------------");
  });
} else {
  console.log("🎉 All AI-added images have been verified!\n");
}
