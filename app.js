// Erick Galvez main page actions / fucntions
// 12 - 16 - 2021


let icon = document.querySelector('#colorIcon i'); // get icon in order to change class
let linkIcons = document.querySelectorAll('#collapseLinks .card div a i'); // get addtional link icons
let size = icon.className.split(" "); // get icon class name for reference based on certain actions
let clickCount = 0; // helper variable for when changing to dark mode
const myWindow = document.querySelector('body'); // get window size
const aboutMeBtn = document.querySelector('#aboutMe'); // for when about button is clicked
const contactBtn = document.querySelector('#contact'); // for when contact info button is clicked
const linksBtn = document.querySelector('#links'); // for when links button is clicked

//immediately checks to see if window is phone size to resize
checkWindowSize();


// in case of additional links button is clicked will show additional links tab
linksBtn.addEventListener('click', function(){
    const links = document.querySelector('#collapseLinks');
    const icon = document.querySelector('#linksArrow')

    if (links.classList.contains('show')) {
        links.classList.remove('show');
        icon.classList.add('fa-arrow-right');
        icon.classList.remove('fa-arrow-down');

    } else {
        links.classList.add('show');
        icon.classList.remove('fa-arrow-right');
        icon.classList.add('fa-arrow-down');
    }

});

// in case contact button is clicked contact info is shown
contactBtn.addEventListener('click', function(){
    const contact = document.querySelector('#collapseContact');
    const icon = document.querySelector('#contactArrow')

    if (contact.classList.contains('show')) {
        contact.classList.remove('show');
        icon.classList.add('fa-arrow-right');
        icon.classList.remove('fa-arrow-down');

    } else {
        contact.classList.add('show');
        icon.classList.remove('fa-arrow-right');
        icon.classList.add('fa-arrow-down');
    }

});

// in case about me is clicked correlating about me info is shown
aboutMeBtn.addEventListener('click', function(){
    const about = document.querySelector('#collapseAboutMe');
    const icon = document.querySelector('#aboutArrow')

    if (about.classList.contains('show')) {
        about.classList.remove('show');
        icon.classList.add('fa-arrow-right');
        icon.classList.remove('fa-arrow-down');

    } else {
        about.classList.add('show');
        icon.classList.remove('fa-arrow-right');
        icon.classList.add('fa-arrow-down');
    }

});

if (window.innerWidth <= 650) {
    icon.className = `${size[0]} ${size[1]} fa-lg`;
    size = icon.className.split(" ");
}
// this function will check when window is resized
// if window size goes under certain threshold it will change the icon size
// if above threshold will make icon 2x
function checkWindowSize() {
    if (window.innerWidth <= 650) {
        for(currIcon of linkIcons){
            if(currIcon.classList.contains('fa-4x')){
                currIcon.classList.remove('fa-4x');
                currIcon.classList.add('fa-2x');
            }

        }
        icon.className = `${size[0]} ${size[1]} fa-lg`;
        size = icon.className.split(" ");
    } else {
        for(currIcon of linkIcons){
            if(currIcon.classList.contains('fa-2x')){
                currIcon.classList.remove('fa-2x');
                currIcon.classList.add('fa-4x');
            }

        }
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
    const btns = document.querySelectorAll('.btn');
    const infoContainer = document.querySelectorAll('.card');

    if (clickCount % 2 == 0) {
        for(let i = 0; i < btns.length; i++){
            infoContainer[i].style.backgroundColor = 'white';
            infoContainer[i].style.color = 'black';
            btns[i].style.backgroundColor = 'white';
            btns[i].style.color = 'black';
        }
        myWindow.style.backgroundColor = 'white';
        myWindow.style.color = 'black';
        
    }
    else {
        for(let i = 0; i < btns.length; i++){
            infoContainer[i].style.backgroundColor = 'black';
            infoContainer[i].style.color = 'white';
            btns[i].style.backgroundColor = 'black';
            btns[i].style.color = 'white';
        }
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

