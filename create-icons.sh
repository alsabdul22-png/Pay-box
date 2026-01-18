#!/bin/bash
# Icon Generator für Kasse App

echo "Erstelle Icon für Kasse App..."

# PNG Icon erstellen (256x256) - als Basis für alle Größen
convert -size 256x256 xc:'#0f0f0f' \
    -fill '#00d4ff' -draw 'rectangle 30,40 226,180' \
    -fill '#ffffff' -pointsize 80 -gravity center -draw 'text 0,0 "💳"' \
    assets/icon.png 2>/dev/null || echo "ImageMagick nicht verfügbar"

echo "Icon erstellt: assets/icon.png"
