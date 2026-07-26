const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function check() {
  const dir = path.join(__dirname, '../public/images/Cluster_1');
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f.endsWith('.webp')) {
      const meta = await sharp(path.join(dir, f)).metadata();
      console.log(`${f}: ${meta.width}x${meta.height} (ratio ${(meta.width/meta.height).toFixed(3)})`);
    }
  }
}
check();
