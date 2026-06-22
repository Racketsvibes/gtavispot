const sharp = require('sharp');

async function run() {
  try {
    const icon = sharp('public/GTA 6 site Icon.png');
    const logo = sharp('public/GTAvi Logo.png');
    
    // Get raw pixel buffer of a 10x10 corner
    const iconBuf = await icon.clone().resize(10, 10).raw().toBuffer();
    console.log('Icon corner pixels (RGB):', iconBuf.slice(0, 30));
    
    const logoBuf = await logo.clone().resize(10, 10).raw().toBuffer();
    console.log('Logo corner pixels (RGBA):', logoBuf.slice(0, 40));
  } catch (err) {
    console.error('Error:', err.message);
  }
}

run();
