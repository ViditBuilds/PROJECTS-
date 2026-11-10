// ===========================================
// MOBILE HAMBURGER MENU
// ===========================================
const navHamburger = document.getElementById("navHamburger");
const navLinksMobile = document.getElementById("navLinksMobile");

if (navHamburger && navLinksMobile) {
    navHamburger.addEventListener("click", function () {
        navLinksMobile.classList.toggle("open");
    });
} 



