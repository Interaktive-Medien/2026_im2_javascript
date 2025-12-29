const listCt = document.querySelector('#list');
const knownProductsCt = document.querySelector('#known-products');
const addInput = document.querySelector('#add');

// -> initialize list
let list = localStorage.getItem('list');
if (list) {
    list = JSON.parse(list);
} else {
    list = [];
    localStorage.setItem('list', JSON.stringify(list));
}

// -> initialize knownProducts
let knownProducts = localStorage.getItem('known-products');
if (knownProducts) {
    knownProducts = JSON.parse(knownProducts);
} else {
    knownProducts = [];
    localStorage.setItem('known-products', JSON.stringify(knownProducts))
}

// -> functions
function displayList() {
    listCt.innerHTML = '';
    list.forEach(item => {
        const li = document.createElement('li');
        const name = document.createElement('span');
        name.innerText = item;
        li.appendChild(name);
        const btn = document.createElement('span');
        btn.innerText = 'gekauft ✅';
        btn.addEventListener('click', function(e) {
            removeItem(e.target.dataset.value)
        });
        btn.dataset.value = item;
        li.appendChild(btn);
        listCt.appendChild(li)
    })
}
function displayDatalist() {
    knownProductsCt.innerHTML = '';
    knownProducts.forEach(item => {
        const option = document.createElement('option');
        option.setAttribute('value', item);
        knownProductsCt.appendChild(option);
    })
}
function addItem(value) {
    list.push(value);
    localStorage.setItem('list', JSON.stringify(list))
    displayList();
    displayDatalist();
}
function addDatalistItem(value){
    const isInList = knownProducts.includes(value);
    if (!isInList) {
        knownProducts.push(value);
        localStorage.setItem('known-products', JSON.stringify(knownProducts));
        displayDatalist();
    }
}
function removeItem(value) {
    const index = list.indexOf(value);
    list.splice(index,1);
    localStorage.setItem('list', JSON.stringify(list))
    displayList();
}

// -> events
addInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        addItem(e.target.value);
        addDatalistItem(e.target.value);
        e.target.value = '';
        e.target.focus();
    }
})

// -> init
function init() {
    displayList();
}
init()
