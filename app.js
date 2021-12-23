// Erick Galvez main page actions / fucntions
// 12 - 16 - 2021


let icon = document.querySelector('#colorIcon i'); // get icon in order to change class
let size = icon.className.split(" "); // get icon class name for reference based on certain actions
const myWindow = document.querySelector('body'); // get window size


if (window.innerWidth <= 650) {
    icon.className = `${size[0]} ${size[1]} fa-lg`;
    size = icon.className.split(" ");
}
// this function will check when window is resized
// if window size goes under certain threshold it will change the icon size
// if above threshold will make icon 2x
function checkWindowSize() {
    if (window.innerWidth <= 650) {
        icon.className = `${size[0]} ${size[1]} fa-lg`;
        size = icon.className.split(" ");
    } else {
        icon.className = `${size[0]} ${size[1]} fa-2x`;
        size = icon.className.split(" ");
    }

}
// constantly calls checkWindowSize when window is resized
window.onresize = checkWindowSize;


// when cursor enters icon field change icon
icon.addEventListener("mouseenter", function (event) {
    event.target.className = `far ${size[1]} ${size[2]}`;
    size = icon.className.split(" ");
}, false);

// when cursor leaves icon field change icon back to original state
icon.addEventListener("mouseleave", function (event) {
    event.target.className = `fas ${size[1]} ${size[2]}`;
    size = icon.className.split(" ");
}, false);