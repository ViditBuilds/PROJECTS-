// ===========================================
// Simple JS - buttons ke click par kya hoga
// ===========================================

// Mobile hamburger menu - click karne par mobile links khulenge/band honge
const navHamburger = document.getElementById("navHamburger");
const navLinksMobile = document.getElementById("navLinksMobile"); 


navHamburger.addEventListener("click", function () {
    navLinksMobile.classList.toggle("open");
}); 


// *************************ABOUT BTN *****************

const aboutbtn = document.getElementById("aboutbtn");  

aboutbtn.addEventListener("click" , function(e){ 
    e.preventDefault(); 
    alert("This page is is available very soon to open it !")
})


// ***********************************************************************"Get Started" button click 


// const getStartedBtn = document.getElementById("getStartedBtn"); 

// getStartedBtn.addEventListener("click", function (e) {
  // e.preventDefault(); // link ko normally navigate hone se roka
    // alert("Signup page yahan open hoga! (abhi ke liye demo alert hai)");
    // Real project mein yahan tum kar sakte ho:
    // window.location.href = "signup.html";
// });

// "Watch Demo" button click
const watchDemoBtn = document.getElementById("watchDemoBtn");

watchDemoBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Demo video will attached very soon! Thank You ");
    // Real project mein yahan tum kar sakte ho:
    // ek video modal/popup open kar sakte ho
});

// ===========================================
// SCROLL REVEAL ANIMATION (How It Works section)
// Ab ye TWO-WAY hai:
// - Scroll DOWN karte hue element viewport mein aaye -> "in-view" class ADD hoti hai (animate in)
// - Scroll UP karte hue element viewport se bahar jaaye -> "in-view" class REMOVE hoti hai (animate out / wapas)
// Isliye "observer.unobserve()" hata diya hai - element ko hamesha observe karte rehna hai
// taaki dono directions mein animation trigger ho sake.
// ===========================================
const animatedRows = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // Element viewport mein aa gaya -> forward animation
                entry.target.classList.add("in-view");
            } else {
                // Element viewport se bahar chala gaya (scroll up ya bahut neeche scroll) -> reverse animation
                entry.target.classList.remove("in-view");
            }
        });
    },
    {
        threshold: 0.25,
    }
);

animatedRows.forEach(function (row) {
    observer.observe(row);
}); 






// ===========================================
// ******************************************* CUSTOM CURSOR - dot mouse ke saath move karega ******************// 
// ===========================================
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

if (cursorDot && cursorRing) {
  let ringX = 0, ringY = 0;
  let mouseX = 0, mouseY = 0;

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot turant mouse ke exact position pe move karega
    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";
  });

  // Ring thoda delay se follow karega - smooth trailing effect
  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left = ringX + "px";
    cursorRing.style.top = ringY + "px";

    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Buttons/links pe hover karte hi ring bada ho jayega
  const hoverTargets = document.querySelectorAll("a, button, .btn");
  hoverTargets.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      cursorRing.classList.add("hovering");
    });
    el.addEventListener("mouseleave", function () {
      cursorRing.classList.remove("hovering");
    });
  });
}