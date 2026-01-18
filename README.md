# Kasse App - Desktop Version

Eine professionelle Kassenverwaltungs-Anwendung für Windows, entwickelt mit Electron.

## Installation

### Voraussetzungen
- Node.js und npm installiert (https://nodejs.org/)

### Installation durchführen

1. **Abhängigkeiten installieren**
```bash
npm install
```

2. **App starten (Entwicklungsmodus)**
```bash
npm start
```

3. **Installierbare EXE-Datei erstellen**
```bash
npm run build-win
```

Die EXE-Dateien werden im Ordner `dist/` erstellt.

## Features

✓ Artikel-Verwaltung (Hinzufügen, Löschen, Bearbeiten)  
✓ Warenkorb mit Mengen-Steuerung  
✓ Automatische Steuerberechnung (19%)  
✓ Quittungs-Druck  
✓ Datenspeicherung (LocalStorage)  
✓ Modernes, benutzerfreundliches Design  
✓ Windows-Menü und Tastenkombinationen  
✓ Responsive Oberfläche  

## Verwendung

1. **Artikel hinzufügen**: Unten links "Neuer Artikel" mit Name und Preis eingeben
2. **Verkaufen**: Artikel-Button anklicken zum Warenkorb hinzufügen
3. **Ändern**: Mengen in Warenkorb mit +/- anpassen oder ✕ zum Löschen
4. **Bezahlung**: "Bezahlen"-Button für Quittung und Abschluss
5. **Datenspeicherung**: Alle Artikel bleiben gespeichert

## Entwicklung

- **main.js**: Electron-Hauptprozess
- **preload.js**: Sicherheitsebene zwischen Renderer und Main
- **index.html**: HTML-Struktur
- **style.css**: Styling und Layout
- **script.js**: Funktionalität und Logik

## Build für Distribution

Nach `npm run build-win` finden Sie im `dist/`-Ordner:
- **KasseApp-Setup.exe**: Installationsprogramm
- **KasseApp.exe**: Portable Version (läuft ohne Installation)
