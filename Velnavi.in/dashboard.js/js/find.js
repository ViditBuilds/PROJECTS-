document.addEventListener("DOMContentLoaded", () => {

    // ===========================================
    // PROFILE DATA LOAD (dashboard jaisa hi)
    // ===========================================
    const savedProfile = JSON.parse(localStorage.getItem("velnaviProfile"));

    if (savedProfile) {
        document.getElementById("topbarName").textContent = savedProfile.fullName;
        const levelDisplay = savedProfile.level.charAt(0).toUpperCase() + savedProfile.level.slice(1);
        document.getElementById("topbarLevel").textContent = levelDisplay;
    }


    // ===========================================
    // FILTER CHIPS (All / Your Interests / Most Active)
    // ===========================================
    const filterChips = document.querySelectorAll(".fp-filter-chip");

    filterChips.forEach((chip) => {
        chip.addEventListener("click", () => {
            filterChips.forEach((c) => c.classList.remove("active"));
            chip.classList.add("active");
        });
    });


    // ===========================================
    // TOPIC CARD CLICK
    // Abhi ke liye sirf topic name save kar rahe hain -
    // "Available Partners" page banne ke baad yahi se redirect hoga
    // ===========================================
    const topicCards = document.querySelectorAll(".fp-clickable");

    topicCards.forEach((card) => {
        card.addEventListener("click", () => {
            const topic = card.dataset.topic;
            localStorage.setItem("velnaviSelectedTopic", topic);

            // TODO: jab Available Partners page banega, yahan redirect add karenge
            // window.location.href = "../../available-partners/html/available-partners.html";
        });
    });

});