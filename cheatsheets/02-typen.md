# Cheatsheet `Typen`
Alles, was in JavaScript in Variablen gespeichert wird, hat einen bestimmten Typ. Der Typ einer Variable hat Auswirkungen darauf, was mit dieser Variable alles gemacht werden kann. Beispielsweise kann mit **Numbers** gerechnet werden, mit **Strings** aber nicht. 

## Strings

**Strings deklarieren**

```javascript
let name = 'Wolfgang' // Strings werden in Anführungs- und Schlusszeichen geschrieben
```
**Strings verketten**

```javascript
let firstname = 'Wolfgang'
let lastname = 'Bock'

let name = `${firstname} ${lastname}` // Methode Template Literals
let name = firstname + ' ' + lastname // Methode Konkatenation
```
> ⚠️ Merke: Um mit Template Literals zu arbeiten, muss mit sogenannten Backticks (`), nicht mit normalen Anführungszeichen (' oder "), gearbeitet werden. Dieses wird auf der Tastatur meist auf derselben Taste wie das Caret (^) gefunden. 

## Numbers

**Arten von Numbers**
- `integer` sind Ganzzahlen, wie z.B. 5, 7, -4 oder 100
- `float` sind Zahlen mit Dezimalstellen, wie z.B. 5.32 oder -21.2

**Numbers definieren**

```javascript
let age = 35
let price = 22.6
// Numbers werden immer ohne Anführungszeichen geschrieben
```

**Mit Numbers rechnen**

```javascript
let priceApple = 5;
let pricePear = 7;
let total = priceApple * 3 + pricePear * 5; 
// Es kann mit jeglichen mathematischen Operatoren gerechnet werden
// Es gelten konventionelle mathematische Regeln wie z.B. Punkt vor Strich
```

**Numbers manipulieren**

```javascript
let price = 4.55559;
let roundedPrice = Math.round(price) // Runden -> Rückgabe ist 5
let roundedPrice = Math.round(price).toFixed(2) // Runden auf eine gewisse Anzahl Stellen -> Rückgabe ist 4.56
let priceAsString = price.toString() // Zahl in einen String umwandeln -> Rückgabe ist '4.55559'
```

## Booleans
Booleans sind binäre Werte. Sie nehmen entweder 0 (was für false steht) oder 1 (was für true steht) an.

**Booleans definieren**

```javascript
let isDumb = false
let isMotivated = true 
// Booleans werden ohne Anführungs- und Schlusszeichen geschrieben
```

## Arrays
Diesem Datentyp ist ein gesamtes Kapitel gewidmet, mehr zu Arrays findest du [hier](09-arrays.md).
```javascript
let wg = ['Barbie', 'Ken', 'Allan'];
```

## Objekte
Diesem Datentyp ist ein gesamtes Kapitel gewidmet, mehr zu Objekten findest du [hier](11-objekte.md).
```javascript
let shoe = {
    size: 40,
    color: 'red'
}
```

### Quellen
- [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number?retiredLocale=de)
- [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Booleans](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean?retiredLocale=de)
