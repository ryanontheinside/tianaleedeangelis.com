const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Create OpenGraph image
const width = 1200;
const height = 630;
const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#333333;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)"/>
  <text x="50%" y="40%" font-family="Arial" font-size="72" fill="white" text-anchor="middle" dominant-baseline="middle">RyanOnTheInside</text>
  <text x="50%" y="60%" font-family="Arial" font-size="36" fill="#cccccc" text-anchor="middle" dominant-baseline="middle">Tech, Music &amp; Art</text>
</svg>
`;

// Generate og-image.png
sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(PUBLIC_DIR, 'og-image.png')); 