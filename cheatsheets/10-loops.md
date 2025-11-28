# Cheatsheet `Loops`
Loops, auf Deutsch Schleifen, sind ein extrem relevantes Tool um in JavaScript Arrays zu verarbeiten. Sie können aber auch anderweitig für repetitive Aufgaben/Funktionen eingesetzt werden.

## For-Each Schlaufe
```javascript
const wg = ['Barbie', 'Ken', 'Allan'];
wg.forEach((member,index) => {
    console.log(`${member} lebt in der WG mit Index ${index}`);
})
// Schreibt einen Eintrag in die Konsole für jedes Item
```

## For-Schlaufe
Die for-Schlaufe ist ein grundlegendes Programmierkonzept, welches in eigentlich allen Programmiersprachen vorkommt. In JavaScript kann die `forEach` Schlaufe genau das, was die `for`-Schlaufe auch kann, deshalb wird sie relativ selten benötigt. Dennoch ist es wichtig, sie zu verstehen.
```javascript
const wg = ['Barbie', 'Ken', 'Allan'];
for(let i = 0; i < wg.length; i++) {
    console.log(`${wg[i]} lebt in der WG mit Index ${i}`);
}
```
For-Loops können auch unabhängig eines Arrays gebraucht werden, um Dinge x-Fach zu machen.
```javascript
// dieses Beispiel führt 10x einen console.log aus
for (let i = 0; i < 10; i++) {
    console.log(`Mach das zum ${i + 1} Mal`)
}
```
Die Parameter der for-Schlaufen-Funktion sind folgende
- `1` Start-Index (meistens 0)
- `2` Wann aufgehört werden soll (meist anhand der Anzahl Items im Array definiert)
- `3` Was nach jedem Durchlauf passieren soll (meistens um 1 erhöhen, sprich i++)

## While-Schlaufe
> ⚠️ **Achtung**: Wenn eine While-Schlaufe falsch angewendet wird, kann sie den Browser zum Abstürzen bringen. Deshalb: Vorsichtig sein damit.

Auch eine While-Schlaufe ist ein grundlegendes Programmierkonzept und deshalb wichtig zu kennen. Eine While-Schlaufe führt etwas so lange aus, bis eine Bedingung eintritt, welche die Schlaufe stoppt,
```javascript
// Diese While-Schlaufe macht genau dasselbe, wie die for-Schlaufe oben.
let i = 0
while (i < 10) {
    console.log(`Do this the ${i + 1} time`);
    i++;
}
```
Das Konzept des While-Loops wird extrem selten verwendet.

### Quellen
- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?retiredLocale=de)
- [for Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for?retiredLocale=de)
- [while Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while?retiredLocale=de)
