# Cheatsheet `Funktionen`
Funktionen in JavaScript sind dazu da, vordefinierten Code mehrfach auszuführen. 

## Aufbau einer Funktion
Um eine funktionierende Funktion zu schreiben, muss diese immer zuerst **deklariert** werden. Sprich: Es wird der vordefinierte Code, der aufgeführt werden soll, geschrieben. Das passiert in einer vorgegebenen Syntax. 

```js
function name_der_funktion (parameter) {
    console.log(`hoi ${parameter}`);
}
// function: Keyword welches JavaScript sagt, dass es sich um eine Funktion handelt
// name_der_funktion: Titel unter welchem die Funktion später aufgerufen werden kann
// parameter: Parameter sind Werte, welche der Funktion mitgegeben werden können, um in der Funktion zu verarbeiten
// console.log(): Anweisung; Code, welcher in der Funktion ausgeführt werden soll
```

Sobald eine Funktion einmal **deklariert** wurde, kann man die Funktion **aufrufen**. Das kann so viel mal passieren, wie man will - man kann eine Funktion 1x nutzen oder 20x. 

```js
name_der_funktion('Lea');
name_der_funktion('Wolfgang');
name_der_funktion('Anja');
```


## Arten von Funktionen
### Einfache Funktion ohne Parameter
```js
// Deklaration der Funktion
function check () {
    console.log('I am working!')
}
// Aufruf der Funktion
check() // gibt in der Konsole "I am working!" aus.
```

### Einfache Funktion mit Parameter
```js
// Deklaration der Funktion
function verdoppeln (x) {
    console.log(x * 2)
}
// Aufruf der Funktion
verdoppeln(332) // gibt 664 zurück
```

### Einfache Funktion mit Parameter und Fallback
```js
// Deklaration der Funktion
function multiplizieren (x, y = 2) {
    console.log(x * y)
}
// Aufruf der Funktion
multiplizieren(10) // gibt 20 zurück
multiplizieren(2,5) // gibt 10 zurück
```

### Funktion mit Parameter und Return
```javascript
// Deklaration der Funktion
function p_entfernen (string) {
    return string.replace('p', '')
}
let message = 'propositionen und prädikate'
// Aufruf der Funktion
let message_manipulated = p_entfernen(message)
console.log(message_manipulated) // gibt "roositionen und rädikate" zurück
```

## Quellen
- [Grundlagen: Javascript function – Funktionen](https://www.mediaevent.de/javascript/Javascript-Funktionen-Grundlagen.html)
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions?retiredLocale=de)
