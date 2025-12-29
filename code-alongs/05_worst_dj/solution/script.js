const control = document.querySelector('#control');
const songtitel_1 = document.querySelector('#track_01 .song');
const songtitel_2 = document.querySelector('#track_02 .song');
const audio_1 = document.querySelector('#track_01 .player');
const audio_2 = document.querySelector('#track_02 .player');
const volume_control_1 = document.querySelector('#track_01>.volume');
const volume_control_2 = document.querySelector('#track_02>.volume');

let min_song = 1;
let max_song = 24;
let is_playing = false;

function randomNumber(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

control.addEventListener('click', function(event) {
    if (!is_playing) {
        // -> globales
        is_playing = true
        control.innerText = 'stop'
        // -> song 1
        const song_id_01 = randomNumber(min_song, max_song);
        audio_1.setAttribute('src', `../sound/${song_id_01}.mp3`);
        audio_1.play();
        songtitel_1.innerText = `Song No. ${song_id_01}`;
        // -> song 2
        const song_id_02 = randomNumber(min_song, max_song);
        audio_2.setAttribute('src', `../sound/${song_id_02}.mp3`);
        audio_2.play();
        songtitel_2.innerText = `Song No. ${song_id_02}`;
    } else {
        // -> globales
        is_playing = false
        control.innerText = 'play'
        // -> song 1
        audio_1.setAttribute('src', '');
        audio_1.pause();
        songtitel_1.innerText = '';
        // -> song 2
        audio_2.setAttribute('src', '');
        audio_2.pause();
        songtitel_2.innerText = '';
    }
})

volume_control_1.addEventListener('input', function(event) {
    const value = event.target.value;
    audio_1.volume = value / 100;
})
volume_control_2.addEventListener('input', function(event) {
    const value = event.target.value;
    audio_2.volume = value / 100;
})
