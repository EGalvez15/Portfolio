// Erick Galvez main page actions / fucntions
// 12 - 16 - 2021

// get icon in order to change class
let icon = document.querySelector('#colorIcon i');

// when cursor enters icon field change icon
icon.addEventListener("mouseenter", function (event) {
    event.target.className = 'far fa-moon fa-2x';
}, false);

// when cursor leaves icon field change icon back to original state
icon.addEventListener("mouseleave", function (event) {
    event.target.className = 'fas fa-moon fa-2x';
}, false);