let park = [
    {
        id: 1,
        name: "Luna",
        species: "Steinbock",
        gender: "f",
        age: 10,
        enclosure: "Alpenkamm",
        friends: [2],
        children_count: 1,
        pregnant: false,
        diet: "pflanzlich",
        region: "CH"
    },
    {
        id: 2,
        name: "Alpin",
        species: "Steinbock",
        gender: "m",
        age: 12,
        enclosure: "Alpenkamm",
        friends: [1],
        children_count: 0,
        diet: "pflanzlich",
        region: "CH"
    },
    {
        id: 3,
        name: "Falk",
        species: "Fuchs",
        gender: "m",
        age: 4,
        enclosure: "Waldlichtung",
        friends: [11],
        children_count: 0,
        diet: "allesfresser",
        region: "DE"
    },
    {
        id: 4,
        name: "Runa",
        species: "Luchs",
        gender: "f",
        age: 7,
        enclosure: "Felsenhang",
        friends: [3],
        children_count: 1,
        pregnant: true,
        diet: "fleischfresser",
        region: "AT"
    },
    {
        id: 5,
        name: "Balu",
        species: "Braunbär",
        gender: "m",
        age: 14,
        enclosure: "Bergwald",
        friends: [6],
        children_count: 2,
        diet: "allesfresser",
        region: "DE"
    },
    {
        id: 6,
        name: "Mila",
        species: "Murmeltier",
        gender: "f",
        age: 3,
        enclosure: "Bergwiese",
        friends: [5,10],
        children_count: 0,
        pregnant: false,
        diet: "pflanzlich",
        region: "CH"
    },
    {
        id: 7,
        name: "Wanda",
        species: "Wisent",
        gender: "f",
        age: 8,
        enclosure: "Weide",
        friends: [8],
        children_count: 1,
        pregnant: false,
        diet: "pflanzlich",
        region: "DE"
    },
    {
        id: 8,
        name: "Roco",
        species: "Wisent",
        gender: "m",
        age: 9,
        enclosure: "Weide",
        friends: [7],
        children_count: 1,
        diet: "pflanzlich",
        region: "DE"
    },
    {
        id: 9,
        name: "Dachs",
        species: "Dachs",
        gender: "m", age: 6,
        enclosure: "Waldlichtung",
        friends: [3],
        children_count: 0,
        diet: "allesfresser",
        region: "AT"
    },
    {
        id: 10,
        name: "Zora",
        species: "Reh",
        gender: "f",
        age: 5,
        enclosure: "Waldsaum",
        friends: [6],
        children_count: 1,
        pregnant: true,
        diet: "pflanzlich",
        region: "AT"
    },
    {
        id: 11,
        name: "Arno",
        species: "Wolf",
        gender: "m",
        age: 5,
        enclosure: "Felsenhang",
        friends: [3,4],
        children_count: 0,
        diet: "fleischfresser",
        region: "DE"
    },
    {
        id: 12,
        name: "Greta",
        species: "Auerhuhn",
        gender: "f",
        age: 4,
        enclosure: "Bergwiese",
        friends: [],
        children_count: 0,
        pregnant: false,
        diet: "pflanzlich",
        region: "CH"
    },
];
console.log('ausgangslage:', park);

let loesung = [];

// Szenario 1
loesung = park.filter(animal => {
    return animal.enclosure !== 'Weide';
});
console.log('lösung szenario 1:', loesung);

// Szenario 2
loesung = park.toSorted((a,b) => {
    return a.age - b.age;
});
console.log('lösung szenario 2:', loesung);

// Szenario 3
loesung = [...park]; // kopie von park weil .pop() destruktiv ist
loesung.pop();
console.log('lösung szenario 3:', loesung);

// Szenario 4
loesung = [];
park.forEach(animal => {
    if (animal.species === 'Wolf' || animal.species === 'Luchs') {
        loesung.unshift(animal);
    } else {
        loesung.push(animal);
    }
})
console.log('lösung szenario 4:', loesung);

// Szenario 5
for(let i = 0; i < park.length; i++) {
    console.log(`Komm zurück ${park[i].name}`);
}

// Szenario 6
loesung = park.filter(animal => {
    return animal.age >= 8 && (animal.enclosure === 'Alpenkamm' || animal.enclosure === 'Weide');
})
console.log('lösung szenario 6:', loesung);

// Szenario 7
loesung = [...park]; // kopie von park weil .push() destruktiv ist
const animal = loesung.find(animal => {
    return animal.species === 'Wisent' && animal.gender === 'm';
});
const clone = structuredClone(animal);
clone.name = 'Fake-Roco';
loesung.push(clone);
console.log('lösung szenario 7:', loesung);

// Szenario 8
loesung = park.reduce((acc, animal) => {
    return acc + animal.age;
}, 0);
console.log('lösung szenario 8:', loesung);

// Szenario 9
loesung = [...park]; // kopie von park weil .splice() destruktiv ist
loesung.splice(9,1);
console.log('lösung szenario 9:', loesung);

// Szenario 10
loesung = []; // leeren von alter loesung weil mit .push() neu befüllt wird
const regions = ['CH', 'DE', 'AT'];
regions.forEach(region => {
    const animals_by_region = park.filter(animal => animal.region === region);
    const has_pregnant_animals = animals_by_region.some(animal => animal.pregnant);
    const result = {
        'region': region,
        'has_pregnant_animals': has_pregnant_animals
    };
    loesung.push(result);
})
console.log('lösung szenario 10:', loesung);

// Szenario 11
loesung = park.map(animal => {
    return animal.name;
});
console.log('lösung szenario 11:', loesung);
