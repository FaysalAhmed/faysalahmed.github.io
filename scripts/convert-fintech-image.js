import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgPath = path.join(__dirname, '../public/images/fintech-bd-2026-top.svg');
const pngPath = path.join(__dirname, '../public/images/fintech-bd-2026-top.png');

// Read SVG and convert to PNG at 1x and 2x resolution
(async () => {
  try {
    const svg = fs.readFileSync(svgPath);
    
    // Generate 1x PNG (1200x630)
    await sharp(svg)
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(pngPath);
    
    console.log(`✓ Generated ${pngPath}`);
    
    // Generate 2x PNG (2400x1260)
    await sharp(svg)
      .resize(2400, 1260)
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(pngPath.replace('.png', '@2x.png'));
    
    console.log(`✓ Generated ${pngPath.replace('.png', '@2x.png')}`);
  } catch (err) {
    console.error('Error converting SVG to PNG:', err);
    process.exit(1);
  }
})();
