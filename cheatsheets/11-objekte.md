# Cheatsheet `Objekte`
Ein Objekt ist ein weiterer Datentyp in JavaScript - vergleichbar mit einem Array. Es lassen sich in einem Objekt jedoch nicht-gleichförmige Daten speichern - deshalb dient ein Objekt oft dazu, etwas zu beschreiben.

## Syntax
In einem Objekt lassen sich alle möglichen Datentypen speichern - Strings, Arrays, Numbers, Booleans oder weitere Objekte. Ein Objekt muss aussen aus geschwungenen Klammern bestehen.
```javascript
const product = {
    name: 'T-Shirt',
    price: 40,
    availableSizes: ['xs','s','m','l','xl'],
    washingDetails: {
        maxDegrees: 60,
        tumblingAllowed: true
    }
}
```
Einen "Eintrag" in einem Objekt nennt man `Prop`, kurz für Property. Ein `Prop` besteht jeweils aus einem Key/Value Paar. Der Key wäre beispielsweise **name**, die Value ist der String **T-Shirt**.

## Props auslesen
```javascript
// Dot Notation
console.log(product.price); // gibt 40 zurück
// Bracket Notation
console.log(product['price']) // nicht empfohlen, macht aber das selbe
// Nested Props
console.log(product.washinDetails.maxDegrees); // gibt 60 zurück
```

## Props bearbeiten
```javascript
product.price = 50; // Preis auf 50 ändern
product.availableSizes.push('xxl'); // fügt die mögliche Grösse xxl hinzu
```

## Methoden in Objekten
Ein Objekt kann auch Methoden (ein anderes Wort für Funktionen) besitzen. 
```javascript
const animal = {
    name: 'Henry',
    species: 'Chinchilla',
    age: 3.3,
    saysHello: function () {
        // mit dem Keyword thus können Properties des Objekts verwendet werden
        return `Hi, I am ${this.name} the ${this.species}.`
    }
};
console.log(animal.saysHello()); // gibt 'Hi, I am Henry the Chinchilla.'
```

## Array mit Objekten
In einem Array können mehrere Objekte gespeichert werden.
```javascript
const zoo = [
    {
        name: 'Henry',
        species: 'Chinchilla',
        age: 3.3
    },
    {
        name: 'Chiara',
        species: 'Greyhound',
        age: 11.0
    },
    {
        name: 'Merlin',
        species: 'Elephant',
        age: 1.1
    },
    {
        name: 'Fiona',
        species: 'Chinchilla',
        age: 0.5
    }
]
```
In so einem Konstrukt lassen sich Array-Methoden wie `find`, `filter` oder `map` sehr gut anwenden.
```javascript
// diese Funktion gibt alle Tiere zurück, welche unter 2 Jahre alt sind
const babyAnimals = zoo.filter(animal => {
    return animal.age < 2;
});
```


### Quellen
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object?retiredLocale=de)
- [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects?retiredLocale=de)
