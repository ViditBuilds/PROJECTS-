// ===========================================================
// BOTTOM-SECTIONS.JS
// FAQ accordion open/close + newsletter form submit.
// Isko apni index.html mein "js/script.js" ke SAATH,
// ek extra <script> tag se link karo:
// <script src="bottom-sections/js/bottom-sections.js"></script>
// ===========================================================

// ===========================================
// FAQ ACCORDION
// Jab kisi question pe click ho, uska answer khulega/band
// hoga. Ek time pe sirf ek hi FAQ khula rahega.
// ===========================================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const questionBtn = item.querySelector(".faq-question");

  questionBtn.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // Pehle sab FAQs band kar do
    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("open");
    });

    // Agar ye pehle se band tha, to ab isko khol do
    // (agar pehle se khula tha, to bas band ho jayega - toggle effect)
    if (!isOpen) {
      item.classList.add("open");
    }
  });
});

// ===========================================
// NEWSLETTER FORM
// ===========================================
const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = newsletterForm.querySelector("input[type='email']");
    const email = emailInput.value.trim();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    // Abhi ke liye demo alert - real project mein yahan backend/email
    // service (jaise Mailchimp, Firebase) se connect hoga
    alert("Subscribed with " + email + "! (demo - email service yahan connect hoga)");
    newsletterForm.reset();
  });
}