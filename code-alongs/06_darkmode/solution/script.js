// DOM Elements
const toggle = document.querySelector('#toggle');
const html = document.querySelector('html');

// functionality
toggle.addEventListener('click', () => {
    const current_theme = html.dataset.theme;
    const selected_theme = current_theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', selected_theme);
    html.dataset.theme = selected_theme;
})

// initialisation
function init() {
    // handle local storage if set
    const theme_local_storage = localStorage.getItem('theme');
    if (theme_local_storage) {
        html.dataset.theme = theme_local_storage;
        return;
    }

    // handle system preference
    const theme_system_is_light = window.matchMedia("(prefers-color-scheme: light)").matches;
    if (theme_system_is_light) {
        html.dataset.theme = 'light';
    } else {
        html.dataset.theme = 'dark';
    }
}
init();
