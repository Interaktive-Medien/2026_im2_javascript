const firstname_ct = document.querySelector('#firstname');
const skills_ct = document.querySelector('#skills');
const input_add = document.querySelector('#add');
const fallback = 'ganz schön viel';

// focus input field
input_add.focus();

// handle name
let firstname = localStorage.getItem('firstname');
if (!firstname) {
    firstname = prompt('Gib deinen Vornamen ein.');
    localStorage.setItem('firstname', firstname);
}
firstname_ct.innerText = firstname;

// initialize skills
let skills = localStorage.getItem('skills');
if (skills) {
    skills = JSON.parse(skills);
} else {
    skills = [fallback];
    localStorage.setItem('skills', JSON.stringify(skills));
}

// visualize skills
function visualizeSkills () {
    skills_ct.innerHTML = '';
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.innerText = skill;
        skills_ct.appendChild(span);
    })
}
visualizeSkills();

// add skills
input_add.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && event.target.value.length >= 2) {
        skills.push(event.target.value);
        if (skills.includes(fallback)) {
            const index = skills.indexOf(fallback);
            skills.splice(index,1);
        }
        localStorage.setItem('skills', JSON.stringify(skills));
        input_add.value = '';
        visualizeSkills();
    }
})
