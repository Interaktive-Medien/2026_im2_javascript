# Cheatsheet `API`
API steht für `Application Programming Interface`. Mit einer API kann man ähnliches machen wie mit einer JSON-Datei - der grosse Unterschied ist aber, dass man nicht auf eine lokale Datei zugreift, sondern auf eine URL, wo jemand Daten zur Verfügung stellt. 

## Auf eine API zugreifen
In den Beispielen hier wird mit einer API gearbeitet, welche auf den Live SBB Fahrplan zugreift.
```javascript
const url = 'https://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève';
```

### async/await
> ⚠️ **Wichtig:** Um mit async/await arbeiten zu können, muss das script.js im HTML etwas anders eingebunden werden. Es muss `type="module"` hinzugefügt werden, wie im Beispiel unten.

```html
<script src="script.js" type="module"></script>
```

### async/await direkt
```javascript
const url = 'https://api.com';
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // gibt die Daten der API in der Konsole aus
} catch (error) {
    console.error(error)
}
```

### async/await in einer Funktion
```javascript
async function loadData() {
    const url = 'https://api.com'; // mit korrekter API-URL ersetzen
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const data = await loadData();
console.log(data); // gibt die Daten der API oder false in der Konsole aus
```

### verschachtelte asynchrone Funktionen
Manchmal kommt es vor, dass man eine asynchrone Funktion (wie z.B. eine Funktion um Daten von einer API zu laden) verschachtelt in einer anderen Funktion (meist einem Event Listener) braucht. Wichtig zu wissen ist da, dass wenn das passiert alle äusseren Funktionen ebenfalls als asynchron deklariert werden müssen.

```javascript
const button = document.querySelector('button');
// ❌ das würde nicht funktioneren, da die Funktion im Event Listener nicht asynchrone ist
button.addEventListener('click', function () {
    const data = await loadTimetable();
})
// ✅ das hier funktioniert, die Funktion im Event Listener ist asynchron
button.addEventListener('click', async function () {
    const data = await loadTimetable();
})
```

### fetch
Diese Methode ist veraltet und wird nicht mehr benötigt. Da ihr diese aber "in der freien Wildbahn" trotzdem noch antreffen könntet, wird sie hier gezeigt.
```javascript
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    })
```

### Quellen
- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [async/await](https://javascript.info/async-await)
- [freepublicapis.com](https://www.freepublicapis.com/)
