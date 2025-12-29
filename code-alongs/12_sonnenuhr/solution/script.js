// DOM elements
const html = document.querySelector('html');
const formCt = document.querySelector('form');
const resultCt = document.querySelector('#result');
const emojiCt = resultCt.querySelector('#emoji');
const locationCt = resultCt.querySelector('#location');
const sunriseCt = resultCt.querySelector('#sunrise');
const sunsetCt = resultCt.querySelector('#sunset');

// details
let details = {
    name: '',
    sunrise: '2025-01-01T00:00:00+00:00',
    sunset: '2025-01-01T12:00:00+00:00',
    timezone: 'Europe/Zurich'
}

// data loading functions
async function loadPlaceDetails(place) {
    const url = `https://nominatim.openstreetmap.org/search?city=${place}&format=json`;
    try {
        const placeResponse = await fetch(url);
        return placeResponse.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}
async function loadSunDetails(lat,lng) {
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;
    try {
        const sunDetailsResponse = await fetch(url);
        return sunDetailsResponse.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
async function loadTimezoneDetails(lat,lng) {
    const api_key = '237134a49e794917bc43138f52bf51a3';
    const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${api_key}`;
    try {
        const timezoneDetailsResponse = await fetch(url);
        return timezoneDetailsResponse.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}

// event listener
formCt.addEventListener('submit', async function (e) {
    e.preventDefault();
    const place = e.target.querySelector('#place').value;
    let placeDetails = await loadPlaceDetails(place);
    if (placeDetails.length) {
        placeDetails =  placeDetails[0];
        details.name = placeDetails.name;
        const lat = placeDetails.lat;
        const lng = placeDetails.lon;
        const sunDetails = await loadSunDetails(lat, lng);
        const timezoneDetails = await loadTimezoneDetails(lat, lng);
        if (sunDetails && timezoneDetails) {
            details.sunrise = sunDetails.results.sunrise;
            details.sunset = sunDetails.results.sunset;
            details.timezone = timezoneDetails.features[0].properties.timezone.name;
            showResult();
        }
    }
})

// display data
function showResult () {
    // handle dates
    const options = {
        timeZone: details.timezone,
        hour12: false,
        hour: '2-digit',
        minute:'2-digit'
    }
    const current = new Date().toLocaleTimeString('de-CH', options);
    const sunrise = new Date(details.sunrise).toLocaleTimeString('de-CH', options);
    const sunset = new Date(details.sunset).toLocaleTimeString('de-CH', options);
    const sunriseOver = (parseInt(current.replace(':','')) - parseInt(sunrise.replace(':',''))) > 0;
    const sunsetOver = (parseInt(current.replace(':','')) - parseInt(sunset.replace(':',''))) > 0;
    // show emoji
    emojiCt.innerText = sunriseOver && !sunsetOver ? '🌞' : '🌚';
    // show description
    sunriseCt.innerHTML = `⬆️ Die Sonne geht um <span>${sunrise}</span> auf.`
    sunsetCt.innerHTML = `⬇️ Die Sonne geht um <span>${sunset}</span> unter.`
    // show location
    locationCt.innerText = `${details.name} | ${current}`;
    // show container
    resultCt.classList.remove('hidden');
    // change website colormode
    html.dataset.theme = sunriseOver && !sunsetOver ? 'light' : 'dark';
}
