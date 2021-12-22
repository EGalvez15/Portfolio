// Erick Galvez main page actions / fucntions
// 12 - 16 - 2021

// get icon and add hover event to change to what will be 'darkmode'
let icon = document.querySelector('#colorIcon i');
//icon.className = 'fas fa-moon';

icon.addEventListener("mouseenter", function (event) {
    event.target.className = 'far fa-moon fa-2x';

    setTimeout(function () {
        event.target.className = 'fas fa-moon fa-2x';
    }, 800);
}, false);
