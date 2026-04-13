// -> elements
const html = document.querySelector('html');
const main = document.querySelector('main');
const square = document.querySelector('#square');
const text = document.querySelector('#text');

// -> schritt 01
square.style.backgroundColor = 'blue';

// -> schritt 03
text.innerText = 'IM2';

// -> schritt 02
text.classList.add('marked');

// -> schritt 04
square.addEventListener('click', function() {
    square.classList.toggle('big');
})

// -> schritt 05
square.remove();
text.remove();

// -> schritt 06
html.dataset.theme = 'lake';

// -> schritt 07
function create_and_place_circle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    main.appendChild(circle);
}
create_and_place_circle();
create_and_place_circle();

// -> schritt 08
const circles = document.querySelectorAll('.circle');
circles[1].classList.add('blurred');

// -> schritt 09
text.innerText += ' ist toll'
main.prepend(text)

// -> schritt 10
circles[1].classList.remove('blurred');
circles[1].classList.add('square');
circles[1].classList.remove('circle');

// -> schritt 11
circles[1].remove();
text.remove();
let scale = 1.2;
function blow_up_circle(circle) {
    circle.style.transform = `scale(${scale})`;
    scale += 0.2;
}
circles[0].addEventListener('click', function () {
    blow_up_circle(circles[0]);
})
