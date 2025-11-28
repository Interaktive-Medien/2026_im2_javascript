// -> DOM
const main = document.querySelector('main');
const flagsCt = main.querySelector('#flags');
const overviewCt = main.querySelector('#overview');
const countryTitle = main.querySelector('#country');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// -> load data
async function loadCountries () {
    const file = '../data/countries.json';
    const response = await fetch(file);
    return await response.json();
}
const countries = await loadCountries();

// FUNCTIONALITY
const gameRounds = 20;
let gameProgress = [];

function initGame() {
    gameProgress = [];
    overviewCt.innerHTML = '';
    for (let i = 0; i < gameRounds; i++) {
        gameProgress.push(null)
        const span = document.createElement('span');
        overviewCt.appendChild(span)
    }
}

function updateGameProgress(round_index, is_correct) {
    const overviewItem = overviewCt.querySelector('span:not([data-state])');
    gameProgress[round_index] = is_correct;
    overviewItem.dataset.state = is_correct ? 'success' : 'fail';
}

function loadGameRound() {
    const randomCountryIndexes = [];
    for (let i = 0; i < 4; i++) {
        randomCountryIndexes.push(getRandomNumber(0,countries.length - 1))
    }
    const correctCountryIndex = getRandomNumber(0,3);
    randomCountryIndexes.forEach((countryIndex, key) => {
        const isCorrectCountry = key === correctCountryIndex;
        const country = countries[countryIndex];
        flagsCt.children[key].setAttribute('src', country.image);
        flagsCt.children[key].dataset.state = isCorrectCountry ? 'correct' : 'incorrect';
        flagsCt.children[key].addEventListener('click', validateAnswer)
        if (isCorrectCountry) {
            countryTitle.innerText = country.name;
        }
    })
}

function validateAnswer(e) {
    const currentRoundIndex = gameProgress.indexOf(null);
    const currentRoundIsCorrect = e.target.dataset.state === 'correct';
    updateGameProgress(currentRoundIndex, currentRoundIsCorrect);
    // end game if needed
    if (currentRoundIndex !== gameRounds - 1) {
        loadGameRound();
    } else {
        setTimeout(() => {
            restartGame();
        }, 500)
    }
}

function restartGame() {
    // place message
    const points = gameProgress.filter(item => !!item).length;
    alert(`finished with ${points}/${gameRounds} points!`);
    // reset game progress
    init();
}


// -> initialization
function init() {
    initGame();
    loadGameRound();
}
init();
