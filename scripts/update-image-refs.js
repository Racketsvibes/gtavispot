const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');
const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'images');

// Load the conversion mapping
const mappingPath = path.join(__dirname, 'image-conversion-map.json');
if (!fs.existsSync(mappingPath)) {
  console.error('❌ Run convert-images.js first to generate the mapping file.');
  process.exit(1);
}

const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));
console.log(`📄 Loaded ${mapping.length} image conversions from mapping file.\n`);

// Build search/replace pairs from mapping
// e.g. "images/ULTIMATE_EDITION_VAPID_BUGGY_01.jpg" → "images/ULTIMATE_EDITION_VAPID_BUGGY_01.webp"
const replacements = mapping.map(m => ({
  from: path.basename(m.from), // e.g. "ULTIMATE_EDITION_VAPID_BUGGY_01.jpg"
  to: path.basename(m.to),     // e.g. "ULTIMATE_EDITION_VAPID_BUGGY_01.webp"
}));

function getAllTsxFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllTsxFiles(fullPath));
    } else if (entry.isFile() && /\.(tsx?|jsx?|css|json|ts|js)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

let filesModified = 0;
let refsUpdated = 0;

const srcFiles = getAllTsxFiles(SRC_DIR);
console.log(`🔍 Scanning ${srcFiles.length} source files for .jpg references...\n`);

for (const filePath of srcFiles) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  
  for (const { from, to } of replacements) {
    if (content.includes(from)) {
      // Replace all occurrences of this filename
      const count = (content.match(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
      content = content.split(from).join(to);
      refsUpdated += count;
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    const relPath = path.relative(path.join(__dirname, '..'), filePath);
    console.log(`✅ Updated: ${relPath}`);
    filesModified++;
  }
}

console.log('\n' + '='.repeat(60));
console.log('📊 REFERENCE UPDATE SUMMARY');
console.log('='.repeat(60));
console.log(`Source files scanned: ${srcFiles.length}`);
console.log(`Source files modified: ${filesModified}`);
console.log(`Image references updated: ${refsUpdated}`);

// Now delete original JPGs that have been converted
console.log('\n🗑️  Deleting original JPG files...\n');
let deletedCount = 0;
let deletedSize = 0;

for (const m of mapping) {
  const originalPath = path.join(__dirname, '..', 'public', m.from);
  const webpPath = path.join(__dirname, '..', 'public', m.to);
  
  if (fs.existsSync(webpPath) && fs.existsSync(originalPath)) {
    const stats = fs.statSync(originalPath);
    deletedSize += stats.size;
    fs.unlinkSync(originalPath);
    deletedCount++;
  }
}

console.log(`🗑️  Deleted ${deletedCount} original JPG files`);
console.log(`💾 Freed ${(deletedSize / (1024 * 1024)).toFixed(1)} MB of disk space`);
console.log('\n✅ Done! All references updated and originals cleaned up.');
