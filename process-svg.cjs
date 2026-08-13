const fs = require('fs');

const svgContent = fs.readFileSync('./human-bones-skeleton-set/3413.svg', 'utf8');

let cleaned = svgContent
  .replace(/<style>[\s\S]*?<\/style>/gi, '') 
  .replace(/class="[^"]*"/g, '') 
  .replace(/id="[^"]*"/g, '') 
  .replace(/xml:space="preserve"/g, '')
  .replace(/xmlns:xlink="[^"]*"/g, '')
  .replace(/style="[^"]*"/g, '')
  .replace(/fill-rule/g, 'fillRule')
  .replace(/clip-rule/g, 'clipRule')
  .replace(/stroke-width/g, 'strokeWidth')
  .replace(/stroke-miterlimit/g, 'strokeMiterlimit')
  .replace(/<!--.*?-->/gs, ''); 

const boneMap = {
  102: { id: 'clavicle', region: 'allman' },
  103: { id: 'clavicle', region: 'allman' },
  74: { id: 'humerus', region: 'proximal' },
  44: { id: 'humerus', region: 'proximal' },
  73: { id: 'forearm', region: 'distal' },
  72: { id: 'forearm', region: 'distal' },
  43: { id: 'forearm', region: 'distal' },
  42: { id: 'forearm', region: 'distal' },
  118: { id: 'femur', region: 'proximal' },
  104: { id: 'femur', region: 'proximal' },
  120: { id: 'tibia', region: 'proximal' },
  121: { id: 'tibia', region: 'proximal' },
  106: { id: 'tibia', region: 'proximal' },
  107: { id: 'tibia', region: 'proximal' },
  40: { id: 'pelvis', region: 'pelvic-ring' },
  105: { id: 'patella', region: 'patella' },
  119: { id: 'patella', region: 'patella' },
  179: { id: 'head', region: 'skull' },
  180: { id: 'head', region: 'skull' },
  41: { id: 'scapula', region: 'scapula' },
  71: { id: 'scapula', region: 'scapula' },
};

// Add T-L Spine (23-38)
for (let i = 23; i <= 38; i++) boneMap[i] = { id: 'tl-spine', region: 'thoracolumbar' };

// Add Cervical Spine (15-21)
for (let i = 15; i <= 21; i++) boneMap[i] = { id: 'c-spine', region: 'cervical' };

// Add Foot (108-117, 122-131)
for (let i = 108; i <= 117; i++) boneMap[i] = { id: 'foot', region: 'foot' };
for (let i = 122; i <= 131; i++) boneMap[i] = { id: 'foot', region: 'foot' };

// Add Hand (45-70, 75-100)
for (let i = 45; i <= 70; i++) boneMap[i] = { id: 'hand', region: 'hand' };
for (let i = 75; i <= 100; i++) boneMap[i] = { id: 'hand', region: 'hand' };

let pathCounter = 0;
cleaned = cleaned.replace(/<path\s+([^>]+?)\s*\/?>(<\/path>)?/g, (match, pathAttrs) => {
  pathCounter++;
  const b = boneMap[pathCounter];
  if (b) {
    return `
      <g 
        onClick={(e) => { e.stopPropagation(); onSelectBone('${b.id}', '${b.region}'); }} 
        onMouseEnter={() => onHoverBone('${b.id}')} 
        onMouseLeave={() => onHoverBone(null)} 
        className="cursor-pointer group"
      >
        {/* Invisible fat path to increase hit area */}
        <path ${pathAttrs} className="fill-transparent stroke-transparent cursor-pointer stroke-[${b.id === 'patella' ? '40px' : '15px'}]" />
        {/* Visible path */}
        <path ${pathAttrs} className={\`transition-all duration-200 stroke-[1px] \${selectedBoneId === '${b.id}' ? 'fill-orange-400 stroke-orange-500 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)] z-10' : hoveredBoneId === '${b.id}' ? 'fill-yellow-300 stroke-yellow-400 drop-shadow-[0_0_6px_rgba(253,224,71,0.8)] z-10' : darkMode ? 'fill-[#F9F6EE] stroke-gray-400 group-hover:fill-yellow-100 dark:group-hover:fill-yellow-900' : 'fill-[#6B7280] stroke-transparent group-hover:fill-yellow-100'}\`} />
      </g>`;
  } else {
    return `<path ${pathAttrs} className={\`transition-colors duration-200 stroke-[1px] \${darkMode ? 'fill-[#D7D5CB] stroke-gray-500' : 'fill-[#6B7280] stroke-transparent'}\`} />`;
  }
});

const componentCode = `export interface InteractiveSkeletonProps {
  selectedBoneId: string | null;
  hoveredBoneId: string | null;
  onHoverBone: (id: string | null) => void;
  onSelectBone: (id: string, regionId?: string) => void;
  darkMode: boolean;
}

export const InteractiveSkeleton = ({
  selectedBoneId,
  hoveredBoneId,
  onHoverBone,
  onSelectBone,
  darkMode
}: InteractiveSkeletonProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="relative w-full h-full flex justify-center items-center">
        ${cleaned}
      </div>
    </div>
  );
};
`;

fs.writeFileSync('./src/components/canvas/InteractiveSkeleton.tsx', componentCode);
console.log('Successfully created InteractiveSkeleton.tsx with ' + pathCounter + ' paths.');
