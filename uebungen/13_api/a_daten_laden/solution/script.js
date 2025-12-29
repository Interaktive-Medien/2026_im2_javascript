/*
* 13.a - Daten laden
*
* In dieser Übung geht es darum, dass du lernst wie
* einfach es ist, von einer API Daten zu holen. Wähle
* dir dazu eine API von Free Public API's mit dem Tag IM2
* aus (https://www.freepublicapis.com/tags/im2).
*
* Probiere dann, mit der Hilfe des Cheatsheets zu API's
* und AI eine Funktion zu schreiben, die beim Klick auf den
* Button Daten von der API lädt und einfach in der Konsole
* ausgibt.
* */

const button = document.querySelector('#button')
button.addEventListener('click', async function () {
    const url = 'https://randomuser.me/api/';
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error(error);
        return false;
    }
})
