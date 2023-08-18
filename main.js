import './src/styles/main.scss';

// Mega menu custom widht 
function adjustHeaderMargin() {
    var navbar = document.querySelector(".mainmenu");
    var mengamenu = document.querySelector(".megamenu");
    
    if (navbar && mengamenu) {
        var navbarWidth = navbar.clientWidth;
        mengamenu.style.width = navbarWidth + "px";
    }
}

window.addEventListener("load", adjustHeaderMargin);
window.addEventListener("resize", adjustHeaderMargin);
window.addEventListener("orientationchange", adjustHeaderMargin);

// Mobile menu
// const primaryNav = document.querySelector('.main_menu');
// const navToggle = document.querySelector('.navbar-toggler');
// navToggle.addEventListener('click', () => {
//     const visibility = primaryNav.getAttribute('data-visible');
//     if (visibility === 'false') {
//         primaryNav.setAttribute('data-visible', true);
//         navToggle.setAttribute('aria-expanded', true);
//     } else {
//         primaryNav.setAttribute('data-visible', false);
//         navToggle.setAttribute('aria-expanded', false);
//     }
// });
// megamenu display
const megaMenu = document.querySelector('.megamenu');
const menuToggle = document.querySelector('.drop-menu');
const bodyLayer = document.querySelector('.layer');
menuToggle.addEventListener('click', () => {
    const visibility = megaMenu.getAttribute('data-visible');
    if (visibility === 'false') {
        megaMenu.setAttribute('data-visible', true);
        menuToggle.setAttribute('aria-expanded', true);
        bodyLayer.classList.add('active')
    } else {
        megaMenu.setAttribute('data-visible', false);
        menuToggle.setAttribute('aria-expanded', false);
        bodyLayer.classList.remove('active')
    }
})