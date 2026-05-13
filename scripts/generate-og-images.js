import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const contentDir = path.resolve('src/content/fosa');
const outDir = path.resolve('public');

async function listChapters() {
  const files = await fs.readdir(contentDir);
  return files.filter(f => f.endsWith('.md'));
}

function parseFrontmatter(text) {
  const fm = text.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) return {};
  const body = fm[1];
  const obj = {};
  for (const line of body.split('\n')) {
    const m = line.match(/^([A-Za-z0-9_\-]+):\s*(.*)$/);
    if (m) {
      const key = m[1].trim();
      let val = m[2].trim();
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1,-1);
      obj[key] = val;
    }
  }
  return obj;
}

function svgFor(title, subtitle) {
  return `<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1200\" height=\"630\" viewBox=\"0 0 1200 630\">\n  <defs>\n    <linearGradient id=\"g\" x1=\"0\" x2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#0fb9a2\" />\n      <stop offset=\"100%\" stop-color=\"#0a84ff\" />\n    </linearGradient>\n    <style>\n      .bg{fill:#f6f9fb}\n      .card{fill:#ffffff;rx:20}\n      .title{font-family:Inter,system-ui,Segoe UI,Roboto,Arial; font-weight:700; font-size:46px; fill:#0f1724}\n      .sub{font-family:Inter,system-ui,Segoe UI,Roboto,Arial; font-weight:600; font-size:20px; fill:#374151}\n    </style>\n  </defs>\n  <rect width=\"1200\" height=\"630\" fill=\"#f6f9fb\"/>\n  <g transform=\"translate(80,70)\">\n    <rect width=\"1040\" height=\"490\" rx=\"22\" fill=\"white\" stroke=\"rgba(2,6,23,0.06)\"/>\n    <g transform=\"translate(48,40)\">\n      <text class=\"title\">${escapeXml(title)}</text>\n      <text class=\"sub\" y=\"56\">${escapeXml(subtitle || '')}</text>\n      <rect x=\"0\" y=\"110\" width=\"420\" height=\"6\" rx=\"3\" fill=\"url(#g)\" />\n    </g>\n  </g>\n</svg>\n`;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function main() {
  const files = await listChapters();
  for (const file of files) {
    const full = path.join(contentDir, file);
    const text = await fs.readFile(full, 'utf8');
    const fm = parseFrontmatter(text);
    const slug = fm.slug || path.basename(file, '.md');
    const title = fm.title || `Chapter ${fm.chapter || slug}`;
    const subtitle = fm.description || '';
    const svg = svgFor(title, subtitle);
    const svgPath = path.join(outDir, `og-${slug}.svg`);
    const pngPath = path.join(outDir, `og-${slug}.png`);
    await fs.writeFile(svgPath, svg, 'utf8');
    // convert to PNG 1200x630 using sharp
    await sharp(Buffer.from(svg)).png().resize(1200, 630).toFile(pngPath);
    console.log('Written', pngPath);
    // also produce @2x
    const png2x = path.join(outDir, `og-${slug}@2x.png`);
    await sharp(Buffer.from(svg)).png().resize(2400, 1260).toFile(png2x);
    console.log('Written', png2x);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
