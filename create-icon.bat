@echo off
REM Icon Generator für Kasse App - Windows PowerShell Version

echo Erstelle App Icon...

REM Erzeuge Icon mit Python (falls vorhanden)
python -c "
from PIL import Image, ImageDraw, ImageFont
import os

# Erstelle 256x256 Icon
size = 256
img = Image.new('RGB', (size, size), color='#0f0f0f')
draw = ImageDraw.Draw(img)

# Zeichne Gradient-ähnliche Fläche
draw.rectangle([(30, 40), (226, 180)], fill='#00d4ff')
draw.rectangle([(35, 45), (221, 175)], fill='#0099ff')

# Speichere als PNG
os.makedirs('assets', exist_ok=True)
img.save('assets/icon.png')
print('Icon erstellt: assets/icon.png')
" 2>nul || (
    echo.
    echo *** Icon konnte nicht automatisch erstellt werden ***
    echo.
    echo Bitte nutze einen Online-Icon-Generator:
    echo 1. Gehe zu: https://icoconvert.com/ oder https://convertio.co/
    echo 2. Lade diese SVG hoch und konvertiere zu PNG (256x256):
    echo.
    echo Oder installiere Python mit: pip install Pillow
    echo.
)

pause
