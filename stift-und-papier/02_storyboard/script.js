const body = document.querySelector('body');
const form = document.querySelector('#formular');
const input = form.querySelector('#input');
const button = form.querySelector('#button');
const text = document.querySelector('#text');

// schritt 1
body.style.backgroundColor = 'blue';

// schritt 2
button.classList.add('disabled');

// schritt 3
input.addEventListener('input', function () {
    if (input.value.length >= 5) {
        if (input.value.length > 5) {
            body.style.backgroundColor = 'green';
        } else {
            body.style.backgroundColor = 'yellow';
        }
        button.classList.remove('disabled');
    } else {
        body.style.backgroundColor = 'red';
        button.classList.add('disabled');
    }
})

// schritt 4
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const p = document.createElement('p');
    p.innerText = input.value.toUpperCase();
    text.appendChild(p);
})

// schritt 5
form.remove();

// schritt 6
function create_circle(color) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    if (color) {
        circle.style.backgroundColor = color;
    }
    body.appendChild(circle);
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

// schritt 9
form.classList.add('big');
body.appendChild(form);

// schritt 10
const html = body.parentElement;
body.style.backgroundColor = '';
html.dataset.theme = 'fun';

// schritt 11
const saved_name = localStorage.getItem('saved_name');
const container = document.createElement('p');
if (saved_name) {
    container.innerText = saved_name;
} else {
    const entered_name = prompt('Bitte gib deinen Namen ein');
    container.innerText = entered_name;
    localStorage.setItem('saved_name', entered_name);
}
text.appendChild(container);
