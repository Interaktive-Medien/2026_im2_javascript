# Cheatsheet `Multimedia`
Mit JavaScript können auch interaktive Elemente von Webseiten gesteuert werden. Die wichtigsten sind Videos und Audios.

## Video

### Video im HTML
```html
<video controls autoplay loop muted playsinline>
    <source src="movie.mp4" type="video/mp4">
</video>
```

### Video im JS
```javascript
const video = document.querySelector('video');
video.play(); // Startet den Video
video.pause(); // Pausiert den Video
video.load(); // Restartet den Video
```

## Audio

### Audio im HTML
```html
<audio controls autoplay>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
```

### Audio im JS
```javascript
const audio = document.querySelector('video');
audio.play(); // Startet das Audio
audio.pause(); // Pausiert das Audio
audio.load(); // Restartet das Audio
```

## Events auf Multimedia-Elementen
Die hier aufgeführten Elemente beziehen sich auf Audios und Videos gleichermassen.
```js
const video = document.querySelector('video');
// ended Event
video.addEventListener('ended', function(event) {
    console.log('Video ist fertig')
})
// timeupdate Event
video.addEventListener('timeupdate', function(event) {
    console.log('Video läuft')
})
// play Event
video.addEventListener('play', function(event) {
    console.log('Video wird abgespielt')
})
// play Event
video.addEventListener('pause', function(event) {
    console.log('Video wird pausiert')
})
// volumechange Event
video.addEventListener('volumechange', function(event) {
    console.log('Die Lautstärke wurde verändert')
})
```

## Knigge
- Keine Videos mit Ton automatisch abspielen lassen. 
- Keine Audios automatisch abspielen lassen.

### Quellen
- [Video and Audio API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [Audio und Video DOM Reference](https://www.w3schools.com/tags/ref_av_dom.asp)
