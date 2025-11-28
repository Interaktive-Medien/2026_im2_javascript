# Cheatsheet `DOM`
> Das DOM repräsentiert die HTML-Struktur einer Webseite. Wenn man mit JavaScrip auf das DOM zugreift, kann man mit JavaScript steuern, was auf der Webseite angezeigt wird und wie es aussieht - sprich man kann auf HTML und CSS zugreifen. 

## DOM-Elemente laden
```html
<h1>Hallo</h1>
<p class="subtitle">Ich bin ein Text</p>
<mark id="note">Ich bin eine Notiz</mark>
<input id="name" type="text">
```
### querySelector
```javascript
// lädt das erste Element mit einem H1-Tag
const title = document.querySelector('h1');
// lädt das erste Element mit der Klasse 'subtitle'
const subtitle = document.querySelector('.subtitle');
// lädt das erste Element mit der ID 'note'
const note = document.querySelector('#note');
```

### querySelectorAll
```javascript
// lädt alle Elemente mit einem H1-Tag
const titles = document.querySelectorAll('h1');
// lädt alle Elemente mit der Klasse 'subtitle'
const subtitles = document.querySelectorAll('.subtitle');
```

### Scope querySelector & querySelectorAll
Bis jetzt wurden DOM-Elemente immer im `document` gesucht und geladen, sprich es wurde das ganze HTML durchsucht. DOM-Elemente können jedoch auch aus schon bestehenden DOM-Elementen geladen werden. Das ist für die Performance einer Webseite besser.

```html
<p>Hallo Welt</p>
<div id="container">
    <p>Hallo</p>
    <p>Welt</p>
</div>
```

```javascript
// alle p's im div mit der ID 'container' werden geladen, alle anderen nicht
const container = document.querySelector('#container');
const text = container.querySelectorAll('p');
```

## Inhalte aus DOM-Elementen auslesen
```html
<h1>Hallo</h1>
<p class="subtitle">Ich bin ein Text</p>
<mark id="note">Ich bin eine Notiz</mark>
<input id="name" type="text">
```

### Inhalt auslesen
```javascript
const title = document.querySelector('h1');
console.log(title.innerText); // gibt 'Hallo' zurück
```

### Wert eines Input-Felds auslesen
```javascript
const inputName = document.querySelector('#name');
console.log(inputName.value); // gibt zurück, was im Input-Feld mit der ID 'name' drin steht
```

## DOM-Elemente verändern

### Titel ändern
```javascript
const title = document.querySelector('h1');
title.innerText = 'Neuer Titel';
```

### Style verändern
```javascript
const title = document.querySelector('h1');
title.style.color = 'red'; 
title.style.transform = 'translateY(100px)'; 
title.style.backgroundColor = 'orange';
```

### Klassen verändern
```javascript
const subtitle = document.querySelector('.subtitle');
subtitle.classList.add('subtitle-large'); // fügt die Klasse 'subtitle-large' hinzu
subtitle.classList.remove('subtitle'); // entfernt die Klasse 'subtitle'
subtitle.classList.toggle('active'); // Wenn die Klasse 'aktiv' auf dem Element besteht wird sie entfernt, ansonsten hinzugefügt
```

### Attribute verändern
```javascript
const inputName = document.querySelector('#name');
inputName.setAttribute('type', 'number'); // ändert den Typ des Input-Feldes
inputName.setAttribute('required', 'true'); // markiert das Input-Feld als 'required'
```

## Neue DOM-Elemente erstellen & auf der Webseite anzeigen

### Elemente erstellen (offizieller Weg)
```javascript
const image = document.createElement('img');
image.setAttribute('src', 'image.png');
image.setAttribute('alt', 'Bild eines Brotes')
```
### Elemente auf die Seite laden (offizieller Weg)
```javascript
// Container laden, in den das Element platziert werden soll
const body = document.querySelector('body');
// Element in diesen Container rein laden
body.appendChild(image)
```

### Elemente erstellen (einfacher Weg)
```javascript
const image = `<img src='image.png' alt='Bild eines Brotes' />`;
```

### Elemente auf die Seite laden (einfacher Weg)
```javascript
// load container
const body = document.querySelector('body');
// append created element
body += image;
```

## DOM-Elemente von der Webseite entfernen

```js
const title = document.querySelector('h1');
title.remove();
```

### Quellen
- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [Manipulating documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Query Selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector?retiredLocale=de)
- [Query Selector All](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [Append Child](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [Remove Method](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove)
