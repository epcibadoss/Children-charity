const toggleBtn = document.querySelector('.btn__toggle');
const toggleImg = document.querySelector('.btn__toggle img');
const menu = document.querySelector('.nav__container');
let toggle = true;


toggleBtn.addEventListener('click',e => {
    toggle ? toggleImg.src = './images/icon-close.svg' : toggleImg.src = './images/icon-hamburger.svg';
    menu.classList.toggle('open');

    toggle = !toggle;
});



/* slider */

