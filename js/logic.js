const toggle = document.querySelector('#light-dark');

function switchMode() {
    let lighting = document.body;
    lighting.classList.toggle("dark");
}

toggle.addEventListener('click', switchMode);