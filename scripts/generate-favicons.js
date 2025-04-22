const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR);
}

// Create a simple favicon - black background with "R" in white
const size = 512;
const svg = `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black"/>
  <text x="50%" y="50%" font-family="Arial" font-size="300" fill="white" text-anchor="middle" dominant-baseline="middle">R</text>
</svg>
`;

// Generate favicon.ico (multiple sizes)
Promise.all([16, 32, 48].map(size => 
  sharp(Buffer.from(svg))
    .resize(size, size)
    .toBuffer()
)).then(buffers => {
  const ico = require('ico-endec');
  const icoBuffer = ico.encode(buffers);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer);
});

// Generate apple-touch-icon.png (180x180)
sharp(Buffer.from(svg))
  .resize(180, 180)
  .png()
  .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png')); 