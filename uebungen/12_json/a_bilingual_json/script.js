/*
* 12.a - Bilingual JSON
* Kannst du dich an Übung 11b erinnern? Falls du diese Übung noch nicht
* gemacht hast, wäre es eventuell sinnvoll diese zu machen, da
* 11b die Grundlage für diese Übung hier, 12a, ist.
*
* Ziel ist es, dass du den die Übersetzungen, die aktuell im Objekt
* content gespeichert sind, in ein JSON auslagerst und die Übersetzungen
* von dort mittels eines Fetch-Befehls lädst.
*
* Ergänze ebenfalls die Sprachen Englisch (en) und Spanisch (es). Versuche
* dafür AI zu nutzen.
*
* */

const title = document.querySelector('#title');
const description = document.querySelector('#description');
const main = document.querySelector('main');

const content = {
    de: {
        name: 'Deutsch',
        title: 'Willkommen in Biel',
        description: 'Schön hast du den Weg in unsere wunderschöne Stadt gefunden'
    },
    fr: {
        name: 'Français',
        title: 'Bienvenue à Bienne',
        description: 'Nous sommes heureux que vous ayez trouvé le chemin de notre magnifique ville'
    }
};
const availableLanguages = Object.keys(content);

let browserLanguage = navigator.language.slice(0,2);
if (!availableLanguages.includes(browserLanguage)) {
    browserLanguage = 'fr';
}

function loadContent (language) {
    title.innerText = content[language].title;
    description.innerText = content[language].description;
}
loadContent(browserLanguage);

const select = document.createElement('select');
availableLanguages.forEach(language => {
    const option = document.createElement('option');
    option.innerText = content[language].name;
    option.value = language;
    if (language === browserLanguage) {
        option.selected = true;
    }
    select.appendChild(option);
})
select.addEventListener('input', (e) => {
    loadContent(e.target.value);
})
main.appendChild(select);
