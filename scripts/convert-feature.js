const sharp = require('sharp');
const path = require('path');

const src = 'C:/Users/Hafiz/.gemini/antigravity/brain/e2ee6d05-51d2-4f66-8970-ce6388630d06/gta6_vice_city_box_1790271172112.jpg';
const dest = path.resolve(__dirname, '../public/images/news/gta-6-vice-city-collection-feature.webp');

sharp(src)
  .resize(1200, 630, { fit: 'cover', position: 'center' })
  .webp({ quality: 85 })
  .toFile(dest)
  .then(info => console.log('Feature image optimized:', info))
  .catch(err => console.error(err));
