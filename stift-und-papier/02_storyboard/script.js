const viewport = document.querySelector('#viewport');
const square = viewport.querySelector('#square');
const input_number = document.querySelector('#input_number');
const input_text = document.querySelector('#input_text');
const input_range = document.querySelector('#input_range');
const text_container = document.querySelector('#text');
const button = document.querySelector('#button');

// schritt 1
viewport.style.backgroundColor = 'blue';

// schritt 2
square.classList.add('colored');

// schritt 3
button.addEventListener('click', function() {
    const factor = parseInt(input_number.value);
    square.style.width = `${square.clientWidth * factor}px`;
    square.style.height = `${square.clientHeight * factor}px`;
})

// schritt 4
input_text.addEventListener('input', function() {
    text_container.innerHTML += `${input_text.value}<br>`;
})

// schritt 5
square.remove();

// schritt 6
function create_circle(color) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    if (color) {
        circle.style.backgroundColor = color;
    }
    viewport.appendChild(circle);
}
create_circle('yellow');
create_circle();
create_circle('orange');

// schritt 7
const circles = document.querySelectorAll('.circle');
const circle_3 = circles[2];
circle_3.classList.add('blurred');

// schritt 8
const circle_1 = circles[0];
input_range.addEventListener('input', function() {
    let value = input_range.value;
    value = value * -1;
    circle_1.style.transform = `translateX(${value}px)`;
})

// schritt 9
const circle_2 = circles[1];
setTimeout(() => {
    circle_3.remove();
    setTimeout(() => {
        circle_1.remove();
    }, 50)
    setTimeout(() => {
        circle_2.remove();
    }, 2000)
}, 1500)

// schritt 10
square.classList.add('big');
viewport.appendChild(square);

// schritt 11
const html = document.querySelector('html');
viewport.style.backgroundColor = '';
html.dataset.theme = 'fun';
