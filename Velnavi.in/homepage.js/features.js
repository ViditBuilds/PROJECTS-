// ===========================================
// SNAKE LINE - dots ke EXACT centers ko connect karta hai
// Ye har dot ki asli pixel position nikaalta hai (layout se,
// scroll-animation transform ko ignore karke) aur unke beech
// ek zigzag SVG path draw karta hai. Isse line kabhi bhi
// dots se mismatch nahi hogi, chahe card ki height kuch bhi ho.
// ===========================================
function drawSnakeLine() {
    const container = document.querySelector(".snake-container");
    const svg = document.getElementById("snakeLine");
    if (!container || !svg) return;

    const dots = container.querySelectorAll(".snake-dot");
    if (dots.length === 0) return;

    // Ek dot ki position container ke relative nikalne ka helper.
    // offsetLeft/offsetTop use karte hain (transform ko IGNORE karta hai),
    // isliye scroll-in animation ke beech mein bhi position sahi milegi.
    function getPositionRelativeToContainer(el) {
        let x = 0;
        let y = 0;
        let node = el;
        while (node && node !== container) {
            x += node.offsetLeft;
            y += node.offsetTop;
            node = node.offsetParent;
        }
        return { x: x, y: y };
    }

    const points = [];
    dots.forEach(function (dot) {
        const pos = getPositionRelativeToContainer(dot);
        points.push({
            x: pos.x + dot.offsetWidth / 2,
            y: pos.y + dot.offsetHeight / 2,
        });
    });

    // SVG ka size container ke actual size jaisa set karo
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", "0 0 " + width + " " + height);

    // Smooth curve banane ke liye har do points ke beech
    // ek quadratic curve use karte hain (bilkul seedhi line ki jagah)
    let d = "M " + points[0].x + " " + points[0].y;
    for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const midY = (prev.y + curr.y) / 2;
        d += " C " + prev.x + " " + midY + ", " + curr.x + " " + midY + ", " + curr.x + " " + curr.y;
    }

    svg.innerHTML =
        '<path d="' + d + '" fill="none" stroke="#c7d2fe" stroke-width="2" stroke-dasharray="6 8" />';
}

// Page load hote hi aur window resize hone par line dubara draw karo
window.addEventListener("load", drawSnakeLine);

let resizeTimer;
window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawSnakeLine, 150);
});


// Two-way: scroll down par "in-view" add, scroll up
// par element viewport se bahar jaate hi "in-view" remove.
// ===========================================
const animatedItems = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            } else {
                entry.target.classList.remove("in-view");
            }
        });
    },
    {
        threshold: 0.25,
    }
);

animatedItems.forEach(function (item) {
    observer.observe(item);
});

// ===========================================
// CUSTOM CURSOR - dot + trailing ring
// ===========================================
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

if (cursorDot && cursorRing) {
    let ringX = 0,
        ringY = 0;
    let mouseX = 0,
        mouseY = 0;

    document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        cursorRing.style.left = ringX + "px";
        cursorRing.style.top = ringY + "px";

        requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverTargets = document.querySelectorAll("a, button, .snake-card");
    hoverTargets.forEach(function (el) {
        el.addEventListener("mouseenter", function () {
            cursorRing.classList.add("hovering");
        });
        el.addEventListener("mouseleave", function () {
            cursorRing.classList.remove("hovering");
        });
    });
}






const aboutbtn = document.getElementById("aboutbtn");  

aboutbtn.addEventListener("click" , function(e){ 
    e.preventDefault(); 
    alert("This page is is available very soon to open it !")
})