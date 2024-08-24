

const body = document.getElementsByTagName('body')[0];

function updateTheme(theme) {
    body.classList.remove('theme-primary');
    body.classList.remove('theme-dark');

    body.classList.add(theme);
}
