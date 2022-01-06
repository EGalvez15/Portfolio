// Erick Galvez main page actions / fucntions
// 12 - 16 - 2021


let icon = document.querySelector('#colorIcon i'); // get icon in order to change class
let size = icon.className.split(" "); // get icon class name for reference based on certain actions
let clickCount = 0;
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

icon.addEventListener("click", function (event) {
    clickCount += 1;

    if (clickCount % 2 == 0) {
        myWindow.style.backgroundColor = 'white';
        myWindow.style.color = 'black';
    }
    else {
        myWindow.style.backgroundColor = 'black';
        myWindow.style.color = 'white';
    }

});

let myCarousel = document.querySelector('#myCarousel');
let leftButton = document.querySelector('button.carousel-control-prev');
let rightButton = document.querySelector('button.carousel-control-next');

let picCarousel = document.querySelectorAll('#myCarousel .carousel-inner div');
let slideBar = document.querySelectorAll('#myCarousel .carousel-indicators button');

rightButton.addEventListener('click', function () {
    for (let i = 0; i < picCarousel.length; i++) {
        currPic = picCarousel[i].className.split(' ');
        currSlide = slideBar[i].className.split(' ');
        if (currPic.length > 1) {
            if (i + 1 == picCarousel.length) {
                picCarousel[i].className = currPic[0];
                slideBar[i].className = '';
                picCarousel[0].className = currPic[0].concat(" ", currPic[1]);
                slideBar[0].className = currSlide[0];
            }
            else {
                picCarousel[i].className = currPic[0];
                slideBar[i].className = '';
                picCarousel[i + 1].className = currPic[0].concat(" ", currPic[1]);
                slideBar[i + 1].className = currSlide[0];
            }
            break;
        }
    }

});

leftButton.addEventListener('click', function () {
    for (let i = 0; i < picCarousel.length; i++) {
        currPic = picCarousel[i].className.split(' ');
        currSlide = slideBar[i].className.split(' ');
        if (currPic.length > 1) {
            if (i == 0) {
                picCarousel[i].className = currPic[0];
                slideBar[i].className = '';
                picCarousel[picCarousel.length - 1].className = currPic[0].concat(" ", currPic[1]);
                slideBar[slideBar.length - 1].className = currSlide[0];
            }
            else {
                picCarousel[i].className = currPic[0];
                slideBar[i].className = '';
                picCarousel[i - 1].className = currPic[0].concat(" ", currPic[1]);
                slideBar[i - 1].className = currSlide[0];
            }
            break;
        }
    }

});

