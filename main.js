import './src/styles/main.scss';

// Mega menu custom widht 
function adjustHeaderMargin() {
    var navbar = document.querySelector(".mainmenu");
    var mengamenu = document.querySelector(".megamenu");

    if (navbar && mengamenu && window.innerWidth > 768) {
        var navbarWidth = navbar.clientWidth;
        mengamenu.style.width = navbarWidth + "px";
    }
}
window.addEventListener("load", adjustHeaderMargin);
window.addEventListener("resize", adjustHeaderMargin);
window.addEventListener("orientationchange", adjustHeaderMargin);

// Mobile menu
const primaryNav = document.querySelector('.mobile_menu');
const navToggle = document.querySelector('.navbar-toggler');
navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

function adjustMenuLayout() {
    var displayWidth = window.innerWidth;
    var header = document.querySelector(".header");
    var headerTop = document.querySelector(".top-menu__min");
    var topMenu = document.querySelector(".top__menu");
    var mainMenu = document.querySelector(".main-nav");
    var mobileMenu = document.querySelector(".mobile_menu");
    
    if (displayWidth <= 768) {
        // Move top and right menus to mobile menu
        mobileMenu.appendChild(mainMenu);
        mobileMenu.appendChild(topMenu);
    } 
    // else {
    //     // Move top and right menus back to navbar
    //     navbar.appendChild(topMenu);
    //     navbar.appendChild(rightMenu);
    // }
}
adjustMenuLayout();
window.addEventListener("load", adjustMenuLayout);
window.addEventListener("resize", adjustMenuLayout);
window.addEventListener("orientationchange", adjustMenuLayout);

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

const searchForm = document.querySelector('.search-form');
const searchAlt = document.querySelector('.search-alt');
document.addEventListener('click', (e) => {
    const visibility = searchForm.getAttribute('form-visible');
    if (visibility === 'false' && searchAlt.contains(e.target)) {
        searchForm.setAttribute('form-visible', true);
        searchForm.classList.add('show-form')
    }
    if (visibility === 'true' && !searchForm.contains(e.target)) {
        searchForm.setAttribute('form-visible', false);
        searchForm.classList.remove('show-form')
    }
})