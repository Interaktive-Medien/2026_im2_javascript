# Cheatsheet `JSON`
JSON steht für `JavaScript Object Notation`, es ist ein eigenes Dateiformat mit der Endung `.json`. Dieses standardisierte Dateiformat ist dazu da, Daten zwischen Anwendungen auszutauschen. 

## Syntax
JSON sieht sehr ähnlich aus wie ein JavaScript-Objekt. Es gibt in der Syntax jedoch etwas strengere Regeln. 
```json
{
  "name": "T-Shirt",
  "price": 40,
  "availableSizes": ["xs","s","m","l","xl"],
  "washingDetails": {
    "maxDegrees": 40,
    "tumblingAllowed": true
  }
}
```
Die unterschiede zwischen JSON und einem JavaScript Objekt sind. 
 - Keys müssen mit doppelten Anführungszeichen versehen werden.
 - Strings müssen immer in doppelten Anführungszeichen geschrieben werden.

## Arbeiten mit JSON
JSON wird nie direkt in einem JavaScript File geschrieben, es befindet sich immer in einem separaten File mit der Endung `.json`. JSON kann jedoch in JavaScript importiert und dann verarbeitet werden. Technisch funktioniert das mit einer sogenannten `fetch` Funktion.

> Hier eine Kopiervorlage für das Laden einer JSON Datei. Mehr zum darunterliegende Konzept (fetch/async/await) wird im Cheatsheet vom Thema [API](13-api.md) beschrieben.

### Direktes laden von JSON
```javascript
try {
    const file = 'path/to/data.json';
    const dataResponse = await fetch(file);
    const data = await dataResponse.json();
    console.log(data); // gibt den Inhalt des JSON in einer für JavaScript lesbaren Form zurück
} catch (error) {
    console.error(error)
}
```

### Laden von JSON mittels einer Funktion
```javascript
async function loadData() {
    try {
        const file = 'path/to/data.json';
        const dataResponse = await fetch(file);
        return await dataResponse.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const data = await loadData(); // In der Variable data ist nun entweder der Inhalt des JSON gespeichert oder false
```

> ⚠️ **Wichtig:** Um mit async/await (was hier gemacht wird) arbeiten zu können, muss das script.js im HTML etwas anders eingebunden werden. Es muss `type="module"` hinzugefügt werden, wie im Beispiel unten.

```html
<script src="script.js" type="module"></script>
```

### Quellen
- [Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
