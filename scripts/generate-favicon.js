const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createIco() {
  const iconPath = path.resolve(__dirname, '../public/icon.png');
  const sizes = [16, 32, 48];
  const pngBuffers = [];

  for (const size of sizes) {
    const buf = await sharp(iconPath)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push({ size, buffer: buf });
  }

  // ICO header: 6 bytes
  const count = sizes.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4); // count

  // Directory entries: count * 16 bytes
  const dirSize = count * 16;
  let offset = 6 + dirSize;

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 0); // width
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // image data size
    entry.writeUInt32LE(offset, 12); // image data offset
    entries.push(entry);

    offset += item.buffer.length;
  }

  const icoBuffer = Buffer.concat([
    header,
    ...entries,
    ...pngBuffers.map(item => item.buffer)
  ]);

  const destPublic = path.resolve(__dirname, '../public/favicon.ico');
  const destApp = path.resolve(__dirname, '../src/app/favicon.ico');

  fs.writeFileSync(destPublic, icoBuffer);
  fs.writeFileSync(destApp, icoBuffer);

  console.log(`Generated favicon.ico successfully (${icoBuffer.length} bytes) at:`);
  console.log(` - ${destPublic}`);
  console.log(` - ${destApp}`);
}

createIco().catch(err => {
  console.error(err);
  process.exit(1);
});
