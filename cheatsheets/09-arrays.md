# Cheatsheet `Arrays`
Arrays sind ein Datentyp in JavaScript. Er ist dazu da, viel gleichartige Daten gemeinsam (z.B. in einer Variabel) speichern zu können.

## Erstellen eines Arrays
Ein Array sollte, wenn möglich, nur aus Werten des gleichen Types bestehen. Alle Typen sind möglich - ein Array kann auch weitere Arrays beinhalten. Ein Array muss aussen eckige Klammern haben.
```javascript
const wg = ['Barbie', 'Ken', 'Allan'];
const haus = [['Barbie', 'Ken', 'Allan'], ['Superman', 'Spiderman']];
const zahlen = [221, 4, 11889, -3, 0.5];
```

## Auslesen aus einem Array
Die Indexierung in einem Array beginnt bei `0`. Das erste Element in einem Array hat demnach den Index `0`, das zweite den Index `1`, usw. Mittels dieser Indexierung können Werte aus einem Array ausgelesen werden.
```javascript
console.log(wg[0]) // gibt 'Barbie' zurück
console.log(haus[1]) // gibt ['Superman', 'Spiderman'] zurück
```

## Anzahl Einträge in einem Array
```javascript
console.log(wg.length) // gibt 3 zurück
```

## Array manipulieren

### Inhalte hinzufügen
```javascript
wg.push('President Barbie'); // Fügt einen Eintrag an letzter Stelle des Arrays ein
wg.unshift('President Barbie') // Fügt einen Eintrag an erster Stelle des Arrays ein
wg[3] = 'President Barbie' // Wird nicht empfohlen, fügt aber auch an letzter Stelle des Arrays einen Eintrag ein
```

### Inhalte entfernen
```javascript
wg.pop(); // Löscht den letzten Eintrag im Array
wg.shift(); // Löscht den ersten Eintrag im Array
```

### Inhalte ersetzen
```javascript
wg[0] = 'President Barbie' // Ersetzt 'Barbie' mit 'President Barbie'
```

### Splice - die Super-Methode
Splice kann alle oben genannten Dinge gleichzeitig und ist deshalb sehr mächtig. Folgende Parameter hat die Funktion. 

**array.splice(start, deleteCount, itemToAdd1, ...)**
```javascript
const wg = ['Barbie', 'Ken', 'Allan'];
wg.splice(0,2); // Entfernt 'Barbie' und 'Ken'
wg.splice(1,1,'President Barbie'); // Entfernt 'Ken' und fügt 'President Barbie' an dieser Stelle ein
wg.splice(2,0,'Spiderman', 'Superman'); // Fügt 'Spiderman' und 'Superman' zwischen 'Ken' and 'Allan' ein
```

### Arrays zusammenfügen
```javascript
const wg_bern = ['Barbie', 'Ken', 'Allan'];
const wg_chur = ['Superman', 'Spiderman'];
const wgs = wg_bern.concat(wg_chur) // Fügt wg_chur zur wg_bern hinzu;
const wgs = [...wg_bern, ...wg_chur]; // Macht genau das selbe, mit dieser Variante können auch mehr als 2 Array zusammengefügt werden
```

## Weitere Array Methoden
### sort
Wird gebraucht, um Arrays zu sortieren.
```javascript
const numbers = [4, 5 -10, 100, 31];
numbers.sort((a, b) => a - b) // Sortiert die Zahlen von tief nach hoch
numbers.sort((a, b) => b - a) // Sortiert die Zahlen von hoch nach tief
const food = ['Toast','Bread','Banana','Ananas'];
food.sort() // Sortiert die Lebensmittel alphabetisch
```

### map
Wird gebraucht, um für jeden Array-Eintrag etwas zu machen.
```javascript
const numbers = [14, 33, 107];
const numbers_plus_ten = numbers.map(number => {
    return number + 10
}) // Fügt jeder Zahl 10 hinzu
```

### find
Wird gebraucht, um in einem Array ein Element zu finden.
```javascript
const wg_bern = ['Barbie', 'Ken', 'Allan'];
const wg_member_five_letters = wg_bern.find(member => {
    return member.length === 5
}); 
// Gibt den ersten Array-Eintrag zurück, welcher aus 5 Buchstaben besteht
// Wenn keiner gefunden wird, wird undefined zurückgegeben
```

### filter
Wird gebraucht, um einen Array zu filtern.
```javascript
const numbers = [10, 31, -2, 11, -109];
const positive_numbers = numbers.filter(number => {
    return number >= 0;
})
// Gibt einen neuen Array zurück, mit allen Zahlen über 0
```

## Quellen
- [Everything about Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?retiredLocale=de)
- [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find?retiredLocale=de)
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?retiredLocale=de)
