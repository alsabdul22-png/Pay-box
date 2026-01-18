// Icon Generator - erstellt ein einfaches Icon als SVG und Base64
const fs = require('fs');
const path = require('path');

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0099ff;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="256" height="256" fill="url(#grad)"/>
  <rect x="30" y="40" width="196" height="140" rx="10" fill="#ffffff" opacity="0.95"/>
  <rect x="50" y="60" width="70" height="50" rx="5" fill="#00d4ff" opacity="0.3"/>
  <rect x="135" y="60" width="70" height="50" rx="5" fill="#00d4ff" opacity="0.3"/>
  <rect x="50" y="125" width="155" height="8" rx="4" fill="#0099ff" opacity="0.4"/>
  <circle cx="128" cy="200" r="35" fill="#00d4ff" opacity="0.8"/>
  <text x="128" y="210" font-size="40" font-weight="bold" text-anchor="middle" fill="#ffffff" font-family="Arial">💳</text>
</svg>`;

// SVG zu PNG konvertieren (vereinfacht - verwende externes Tool oder online-Konverter)
const iconDir = path.join(__dirname, 'assets');
if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir);
}

// Speichere SVG
fs.writeFileSync(path.join(iconDir, 'icon.svg'), svgIcon);

console.log('Icon erstellt! Bitte konvertiere icon.svg zu icon.ico mit einem Online-Tool:');
console.log('https://convertio.co/svg-ico/ oder https://icoconvert.com/');
