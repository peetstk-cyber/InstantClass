import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

function adminSaveApiPlugin(): Plugin {
  return {
    name: 'admin-save-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/admin/save-image' && req.method === 'POST') {
          try {
            let bodyStr = '';
            for await (const chunk of req) {
              bodyStr += chunk;
            }
            const body = JSON.parse(bodyStr);
            const {
              targetPath, // e.g. "/images/xrays/femur/garden_1.png"
              imageData,  // Base64 data URL e.g. "data:image/png;base64,..."
              boneId,     // "femur"
              regionId,   // "femoral-neck"
              systemIdx,  // 0
              typeIdx,    // 0
              typeCode,   // "Type I"
              updateType, // "xray" | "concept"
            } = body;

            if (!targetPath || !imageData) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'targetPath and imageData are required' }));
              return;
            }

            // 1. Save image to public directory
            const cleanPath = targetPath.startsWith('/') ? targetPath.slice(1) : targetPath;
            const fullFilePath = path.resolve(process.cwd(), 'public', cleanPath);
            const dir = path.dirname(fullFilePath);
            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir, { recursive: true });
            }

            const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
            fs.writeFileSync(fullFilePath, Buffer.from(base64Data, 'base64'));

            // 2. Update bone TS data file if boneId is provided
            let updatedFile = null;
            if (boneId) {
              const boneFilePath = path.resolve(process.cwd(), 'src/data/bones', `${boneId}.ts`);
              if (fs.existsSync(boneFilePath)) {
                const fileContent = fs.readFileSync(boneFilePath, 'utf-8');
                const match = fileContent.match(/export\s+const\s+(\w+)\s*:\s*BoneData\s*=\s*(\{[\s\S]*\});?\s*$/);
                if (match) {
                  const varName = match[1];
                  const jsonStr = match[2];
                  try {
                    const boneObj = JSON.parse(jsonStr);

                    if (updateType === 'illustration') {
                      const reg = regionId 
                        ? boneObj.regions.find((r: any) => r.id === regionId)
                        : boneObj.regions[0];
                      if (reg) {
                        const sys = (typeof systemIdx === 'number' && reg.classifications[systemIdx])
                          ? reg.classifications[systemIdx]
                          : reg.classifications[0];
                        if (sys && sys.types) {
                          const targetType = (typeof typeIdx === 'number' && sys.types[typeIdx])
                            ? sys.types[typeIdx]
                            : sys.types.find((t: any) => t.type === typeCode);
                          if (targetType) {
                            targetType.illustrationId = targetPath;
                          }
                        }
                      }
                    } else if (updateType === 'xray') {
                      const reg = regionId 
                        ? boneObj.regions.find((r: any) => r.id === regionId)
                        : boneObj.regions[0];
                      if (reg) {
                        const sys = (typeof systemIdx === 'number' && reg.classifications[systemIdx])
                          ? reg.classifications[systemIdx]
                          : reg.classifications[0];
                        if (sys && sys.types) {
                          const targetType = (typeof typeIdx === 'number' && sys.types[typeIdx])
                            ? sys.types[typeIdx]
                            : sys.types.find((t: any) => t.type === typeCode);
                          if (targetType) {
                            targetType.xrayUrl = targetPath;
                          }
                        }
                      }
                    } else if (updateType === 'concept') {
                      const reg = regionId
                        ? boneObj.regions.find((r: any) => r.id === regionId)
                        : boneObj.regions[0];
                      if (reg) {
                        if (!reg.regionConcept) {
                          reg.regionConcept = {};
                        }
                        reg.regionConcept.imageUrl = targetPath;
                        if (!Array.isArray(reg.regionConcept.images)) {
                          reg.regionConcept.images = [targetPath];
                        } else if (!reg.regionConcept.images.some((img: any) => (typeof img === 'string' ? img === targetPath : img?.url === targetPath))) {
                          reg.regionConcept.images.push(targetPath);
                        }
                      }
                    }

                    const newContent = `import type { BoneData } from "../../types";\n\nexport const ${varName}: BoneData = ${JSON.stringify(boneObj, null, 2)};\n`;
                    fs.writeFileSync(boneFilePath, newContent, 'utf-8');
                    updatedFile = `src/data/bones/${boneId}.ts`;
                  } catch (parseErr) {
                    console.error("Error parsing/updating bone JSON:", parseErr);
                  }
                }
              }
            }

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ 
              success: true, 
              savedPath: targetPath, 
              fullFilePath,
              updatedFile 
            }));
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
          return;
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    adminSaveApiPlugin(),
  ],
})

