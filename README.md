# PayBox - Professional POS & Back-Office System

Eine professionelle Zahlungsabwicklungs-, Kassenverwaltungs- und Back-Office-Analyse-Anwendung für Windows, entwickelt mit Electron.

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

## Features - Kassensystem

✓ Artikel-Verwaltung über Back-Office  
✓ Warenkorb mit Mengen-Steuerung  
✓ Automatische Steuerberechnung (19%)  
✓ Quittungs-Druck  
✓ Datenspeicherung (LocalStorage)  
✓ Modernes, benutzerfreundliches Design  
✓ Windows-Menü und Tastenkombinationen  
✓ Responsive Oberfläche  
✓ Mehrbenutzer-Unterstützung (Ahmed, Aboud, Jawad)  
✓ Barcode-Scanning  

## Features - Back-Office (Vollseiten-Interface)

Das Back-Office ist eine **eigenständige Vollseite** mit 6 Hauptbereichen:

### 📦 Artikel Management
- **Artikel hinzufügen**: Name, Preis, Barcode, Kategorie
- **Artikel bearbeiten**: Direkte Änderungen
- **Artikel löschen**: Mit Bestätigung
- **Übersicht**: Alle Artikel mit Verkaufszahlen
- **Suchfunktion**: Schnelle Filterung nach Artikelname

### 📊 Dashboard/Übersicht
- Live KPI-Metriken (Tagesumsatz, Transaktionen, Durchschn. Ticketgröße, Top Artikel)
- Verkaufsvergleich nach Mitarbeiter in Echtzeit
- Export-Funktionen (PDF, HTML, JSON, CSV)

### 💰 Kassenabrechnung
- Register-Abrechnung mit Kassenvergleich
- Bargeld vs. Kartentransaktionen
- Automatische Differenzeberechnung
- Abweichungsalerts

### 📈 Verkaufsanalyse
- Detaillierte Produktverkäufe nach Zeitraum
- Umsatz pro Produkt
- Top-Artikel Analyse
- Filtermöglichkeiten nach Datum

### 📦 Produktverwaltung
- Komplette Produkt-Übersicht
- Verkaufszahlen pro Artikel
- Einfaches Löschen aus Back-Office

### 📋 Lagerverwaltung
- Bestandsverwaltung pro Artikel
- Automatische Warnung bei niedrigem Bestand (<10)
- Schnelle Bestandsanpassung
- Suchfunktion

### 👥 Mitarbeiterverwaltung
- Schichten starten/beenden
- Leistungskennzahlen pro Mitarbeiter
- Transaktionshistorie
- Tagesverkäufe pro Person

### 📄 Reporting & Export
- **HTML-Report**: Im Browser anzeigen oder drucken
- **PDF-Druck**: Professionelle Berichte drucken
- **JSON-Export**: Strukturierte Daten
- **CSV-Export**: Tabellenverarbeitung (Excel kompatibel)

## Verwendung - POS Kassensystem

1. **Benutzer wählen**: Beim Start einen Mitarbeiter auswählen
2. **Artikel hinzufügen**: Unten links "Neuer Artikel" mit Name und Preis eingeben
3. **Verkaufen**: Artikel-Button anklicken zum Warenkorb hinzufügen
4. **Ändern**: Mengen in Warenkorb mit +/- anpassen oder ✕ zum Löschen
5. **Bezahlung**: Bargeld oder Karte wählen
6. **Quittung**: Druck bestätigen oder ablehnen

## Verwendung - Back-Office

1. **Zugriff**: 📊 Back-Office Button in der Kassensystem-Oberfläche
2. **Artikel verwalten**: Tab "Artikel" zum Hinzufügen, Bearbeiten und Löschen
3. **Berichte**: Export-Buttons für PDF, JSON, CSV im Dashboard
4. **Kassenabrechnung**: Register vergleichen und Differenzen prüfen
5. **Mitarbeiter**: Schichten starten/beenden und Leistung überwachen
6. **Lager**: Bestandsverwaltung und Warenbewegungen
7. **Analysen**: Detaillierte Verkaufsanalysen mit Datumfilter
8. **Zurück**: Über "← Zurück" Button zum Kassensystem

## Mehrsprachigkeit

- 🇩🇪 Deutsch (Standard)
- 🇬🇧 English
- 🇸🇦 العربية (Arabisch mit RTL-Unterstützung)

## Entwicklung

- **main.js**: Electron-Hauptprozess
- **index.html**: UI-Struktur mit Screen-Routing
- **script.js**: Business Logic & Back-Office Funktionalität
- **style.css**: Styling & Responsive Design

## Technologie

- **Electron.js**: Desktop-Anwendungsrahmen
- **HTML5/CSS3**: Frontend
- **Vanilla JavaScript**: Keine Dependencies für POS
- **LocalStorage**: Datenpersistenz

- **preload.js**: Sicherheitsebene zwischen Renderer und Main
- **index.html**: HTML-Struktur
- **style.css**: Styling und Layout
- **script.js**: Funktionalität und Logik

## Build für Distribution

Nach `npm run build-win` finden Sie im `dist/`-Ordner:
- **KasseApp-Setup.exe**: Installationsprogramm
- **KasseApp.exe**: Portable Version (läuft ohne Installation)

---

Made by Abdulrahman Alshouly

## Version & Contact

- Version: 1.0.0
- Contact: alsabdul22@gmail.com
