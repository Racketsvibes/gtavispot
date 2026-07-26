const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const SIZE_THRESHOLD = 500 * 1024; // 500KB
const WEBP_QUALITY = 80; // Good balance of quality vs size
const MAX_WIDTH = 1920; // Max dimension for any image
const MAX_HEIGHT = 1920;

let totalSaved = 0;
let filesConverted = 0;
let filesSkipped = 0;
let errors = [];

async function getJpgFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await getJpgFiles(fullPath));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      const stats = fs.statSync(fullPath);
      if (ext === '.jpg' || ext === '.jpeg') {
        if (stats.size > SIZE_THRESHOLD) {
          results.push({ path: fullPath, size: stats.size, ext });
        }
      }
    }
  }
  return results;
}

async function convertToWebp(filePath, originalSize) {
  const webpPath = filePath.replace(/\.(jpg|jpeg)$/i, '.webp');
  
  try {
    const metadata = await sharp(filePath).metadata();
    
    let pipeline = sharp(filePath);
    
    // Resize if larger than max dimensions
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    await pipeline
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(webpPath);
    
    const newStats = fs.statSync(webpPath);
    const saved = originalSize - newStats.size;
    const savedPct = ((saved / originalSize) * 100).toFixed(1);
    
    totalSaved += saved;
    filesConverted++;
    
    const relPath = path.relative(IMAGES_DIR, filePath);
    console.log(`✅ ${relPath}: ${(originalSize/1024).toFixed(0)}KB → ${(newStats.size/1024).toFixed(0)}KB (saved ${savedPct}%)`);
    
    return { 
      original: filePath, 
      webp: webpPath, 
      originalSize, 
      newSize: newStats.size,
      relOriginal: path.relative(path.join(__dirname, '..', 'public'), filePath).replace(/\\/g, '/'),
      relWebp: path.relative(path.join(__dirname, '..', 'public'), webpPath).replace(/\\/g, '/'),
    };
  } catch (err) {
    errors.push({ file: filePath, error: err.message });
    console.error(`❌ ${path.relative(IMAGES_DIR, filePath)}: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('🔍 Scanning for oversized JPG images (>500KB)...\n');
  
  const jpgFiles = await getJpgFiles(IMAGES_DIR);
  console.log(`Found ${jpgFiles.length} oversized JPG files\n`);
  console.log('🔄 Converting to WebP...\n');
  
  const results = [];
  
  // Process in batches of 10 for performance
  const batchSize = 10;
  for (let i = 0; i < jpgFiles.length; i += batchSize) {
    const batch = jpgFiles.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(f => convertToWebp(f.path, f.size))
    );
    results.push(...batchResults.filter(Boolean));
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`📊 CONVERSION SUMMARY`);
  console.log('='.repeat(60));
  console.log(`Files converted: ${filesConverted}`);
  console.log(`Total space saved: ${(totalSaved / (1024 * 1024)).toFixed(1)} MB`);
  if (errors.length > 0) {
    console.log(`Errors: ${errors.length}`);
    errors.forEach(e => console.log(`  ❌ ${e.file}: ${e.error}`));
  }
  
  // Output mapping file for reference updates
  const mapping = results.map(r => ({
    from: r.relOriginal,
    to: r.relWebp
  }));
  
  fs.writeFileSync(
    path.join(__dirname, 'image-conversion-map.json'),
    JSON.stringify(mapping, null, 2)
  );
  console.log(`\n📄 Mapping saved to scripts/image-conversion-map.json`);
  
  console.log('\n⚠️  Original JPG files are preserved. Run the cleanup script after verifying conversions.');
}

main().catch(console.error);
