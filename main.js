import './src/styles/main.scss';

// Mega menu custom widht ----------------------------------------------------
function adjustHeaderMargin() {
    var navbar = document.querySelector(".mainmenu");
    var mengamenu = document.querySelector(".megamenu");

    if (navbar && mengamenu && window.innerWidth >= 768) {
        var navbarWidth = navbar.clientWidth;
        mengamenu.style.width = navbarWidth + "px";
    }
}
window.addEventListener("load", adjustHeaderMargin);
window.addEventListener("resize", adjustHeaderMargin);
window.addEventListener("orientationchange", adjustHeaderMargin);

// megamenu display
const megaMenu = document.querySelector('.megamenu');
const menuToggle = document.querySelector('.drop-menu');
const bodyLayer = document.querySelector('.layer');
menuToggle.addEventListener('click', () => {
    const visibility = megaMenu.getAttribute('data-visible');
    if (visibility === 'false' && window.innerWidth) {
        megaMenu.setAttribute('data-visible', true);
        menuToggle.setAttribute('aria-expanded', true);
        bodyLayer.classList.add('active')
    } else {
        megaMenu.setAttribute('data-visible', false);
        menuToggle.setAttribute('aria-expanded', false);
        bodyLayer.classList.remove('active')
    }
})

// Search form toggler -------------------------------------------------------
const searchForm = document.querySelector('.search-form');
const searchAlt = document.querySelector('.search-alt');
const searchMobile = document.querySelector('.search-m');
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
document.addEventListener('click', (e) => {
    const visibility = searchForm.getAttribute('form-mobile');
    if (visibility === 'false' && searchMobile.contains(e.target) && window.innerWidth <= 768) {
        searchForm.setAttribute('form-mobile', true);
    }
    if (visibility === 'true' && !searchForm.contains(e.target)) {
        searchForm.setAttribute('form-mobile', false);
    }
})

// Mobile menu -----------------------------------------------------------------
const mobileMenu = document.querySelector('.mobile_menu');
const navToggle = document.querySelector('.navbar-toggler');
const navClose = document.querySelector('.close_menu');
const header = document.getElementById("header");
const headerTop = document.querySelector(".top-menu__min");
const topMenu = document.querySelector(".top__menu");
const mainMenu = document.querySelector(".main-nav");
const menuS = document.querySelector(".mainmenu");

document.addEventListener('click', (e) => {
    const visibility = mobileMenu.getAttribute('menu-visible');

    if (visibility === 'false' && navToggle.contains(e.target)) {
        mobileMenu.setAttribute('menu-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
    if (visibility === 'true' && navClose.contains(e.target)) {
        mobileMenu.setAttribute('menu-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

function adjustMenuLayout() {
    const visibility = mobileMenu.getAttribute('menu-visible');
    var displayWidth = window.innerWidth;

    if (displayWidth <= 768) {
        // Move top and right menus to mobile menu
        mobileMenu.appendChild(mainMenu);
        mobileMenu.appendChild(topMenu);
        document.body.appendChild(searchForm)
    } 
    else {
        header.appendChild(mainMenu);
        headerTop.appendChild(topMenu);
        menuS.prepend(searchForm)
    }
}
adjustMenuLayout();
window.addEventListener("load", adjustMenuLayout);
window.addEventListener("resize", adjustMenuLayout);
window.addEventListener("orientationchange", adjustMenuLayout);
