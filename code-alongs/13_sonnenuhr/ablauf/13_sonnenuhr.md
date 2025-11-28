# Ablauf `Sonnenuhr`

> **Ziele**: Verschiedene API's in einem Projekt kombinieren

1. Gemeinsam mit den Studierenden das Resultat anschauen.
2. Zuerst planen, wie mit den 3 API's an die Daten gekommen wird. Die Datei [skizze.jpeg](skizze.jpeg) zeigt die mögliche Lösung auf. 
3. Danach in nachfolgenden drei Unterschritten das Projekt umsetzen.
   1. Daten laden
   2. Daten verarbeiten
   3. Daten darstellen

### i. 🚛 Daten laden
1. Für alle drei API's eine Funktion schreiben, welche die Daten lädt. Den Funktionen gleich schon die richtigen/benötigten Parameter mitgeben.
2. Sobald die erste Funktion funktioniert, diese kopieren und für die anderen API's adaptieren.
3. Alle 3 Funktionen gut testen.

### ii. ⚙️ Daten verarbeiten
1. Einen Event-Listener schreiben, der bei Absenden des Formulars die Daten korrekt lädt. 
2. Die benötigten Informationen in das vorbereitete Objekt `details` speichern.
    ```javascript
    let details = {
        name: '',
        sunrise: '2025-01-01T00:00:00+00:00',
        sunset: '2025-01-01T12:00:00+00:00',
        timezone: 'Europe/Zurich'
    }
    ```

### iii. 🖍️ Daten darstellen
1. Eine Funktion erstellen, welche die Informationen korrekt in der vorbereiteten Box darstellt.
2. Nicht vergessen, den Darkmode, je nachdem ob die Sonne scheint, einzubauen.

## API's
- [Nomatim API](https://www.freepublicapis.com/nominatim-api): Für das Laden der Lat/Lng Koordinaten eines Ortes.
- [Sunset Times API](https://www.freepublicapis.com/sunset-times-api): Für das Laden des Sonnenaufgangs bzw. Sonnenuntergangs.
- [Geoapify](https://www.geoapify.com/): Für das Laden der korrekten Zeitzone mit dem API Key `237134a49e794917bc43138f52bf51a3`
