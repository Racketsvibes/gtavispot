const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcPath = 'C:\\Users\\Hafiz\\.gemini\\antigravity\\brain\\2cf5ee0e-55b2-418e-875b-74b6ecaddda7\\gta_6_pre_order_sales_minimal_1784657096428.png';
const destDir = path.join(__dirname, '../public/images/news');
const destPath = path.join(destDir, 'gta-6-pre-order-sales.webp');

async function processImage() {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  if (!fs.existsSync(srcPath)) {
    console.error('Source file does not exist:', srcPath);
    return;
  }

  let quality = 82;
  let width = 1200;
  let buffer = await sharp(srcPath)
    .resize({ width: width, withoutEnlargement: true })
    .webp({ quality: quality })
    .toBuffer();

  fs.writeFileSync(destPath, buffer);
  console.log(`Successfully converted minimalist sales banner to WebP: ${destPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

processImage().catch(console.error);
