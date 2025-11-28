# Cheatsheet `Local Storage`
Mithilfe des Local Storage können Daten im Browser gespeichert werden. So können Daten gespeichert werden, auch wenn der User die Seite verlässt und wieder aufruft. Das Konzept LocalStorage funktioniert nicht browser- und geräteübergreifend.

## Einfügen
In den Local Storage können nur Inhalte vom Typ `string` gespeichert werden. Daten, die keine Strings sind, müssen deshalb umgewandelt werden.
```javascript
// Speichern eines Strings
localStorage.setItem('name', 'Lea');
// Speichern anderer Datentypen
const numbers = [2, 4, 99, 180];
localStorage.setItem('numbers', JSON.stringify(numbers));
```

## Auslesen
Da im Local Storage nur Strings gespeichert werden können, müssen andere Daten beim Auslesen wieder in ihr Ursprungsformat umgewandelt werden. 
```javascript
// Einen String aus dem LocalStorage auslesen
const name = localStorage.getItem('name');
console.log(name); // gibt 'Lea' zurück
// Auslesen von anderen Datentypen aus dem LocalStorage
const numbers_string = localStorage.getItem('numbers');
const numbers = JSON.parse(numbers_string);
console.log(numbers) // gibt [2, 4, 99, 180] zurück
```

## Entfernen
```javascript
localStorage.removeItem('name'); // entfernt den Eintrag mit dem Key 'name' aus dem LocalStorage
localStorage.clear(); // leert den LocalStorage
```

## Browser
Im Browser kann man den Local Storage ansehen. In den Browser Entwicklertools unter **Application** > **Local Storage** kann eingesehen werden, was im Local Storage gespeichert ist.. 

## Session Storage
Nebst dem Local Storage gibt es auch einen Session Storage. Dieser speichert Daten jedoch nur so lange, bis der User den Browsertab schliesst. Der Local Storage speichert die Daten unlimitiert lange. Funktionieren tun aber beide Storages genau gleich.

### Quellen
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
