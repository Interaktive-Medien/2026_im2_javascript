const eye = document.querySelector('#eye');
const pupil = document.querySelector('#pupil');

// -> bloody eye
eye.addEventListener('click', function() {
  eye.classList.toggle('bloody');
});

// -> closing eye
setInterval(function() {
    eye.classList.toggle('closed');
}, 2000)

// -> moving pupil
window.addEventListener('mousemove', function (event) {
    const mouse_x = event.clientX
    const window_width = window.innerWidth
    if (mouse_x < window_width / 3) {
        pupil.classList.add('look_left')
    } else if (mouse_x < window_width / 3 * 2) {
        pupil.classList.remove('look_left')
        pupil.classList.remove('look_right')
    } else {
        pupil.classList.add('look_right')
    }
})
