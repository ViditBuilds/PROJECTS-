// ===========================================
// DASHBOARD DATA LOAD
// Setup Profile se localStorage mein save hua
// data dashboard par dikhana
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    const savedProfile = JSON.parse(
        localStorage.getItem("velnaviProfile")
    );

    // ===========================================
    // PROFILE DATA
    // ===========================================

    if (savedProfile) {

        // Name
        document.getElementById("topbarName").textContent =
            savedProfile.fullName;

        document.getElementById("welcomeName").textContent =
            savedProfile.fullName;


        // ===========================================
        // CURRENT LEVEL
        // ===========================================

        const level = savedProfile.level;

        const levelDisplay =
            level.charAt(0).toUpperCase() +
            level.slice(1);

        // Topbar level
        document.getElementById("topbarLevel").textContent =
            levelDisplay;

        // Dashboard "Your Level"
        document.getElementById("dashboardLevel").textContent =
            levelDisplay;


        // ===========================================
        // NEXT LEVEL
        // ===========================================

        const nextLevelElement =
            document.getElementById("nextLevel");

        if (level === "beginner") {

            nextLevelElement.textContent =
                "Next: Elementary";

        } else if (level === "elementary") {

            nextLevelElement.textContent =
                "Next: Intermediate";

        } else if (level === "intermediate") {

            nextLevelElement.textContent =
                "Next: Advanced";

        } else if (level === "advanced") {

            nextLevelElement.textContent =
                "Highest level";

        } else {

            nextLevelElement.textContent =
                "";

        }
    }


    // ===========================================
    // PROFILE IMAGE
    // ===========================================

    const savedProfileImage =
        localStorage.getItem("velnaviProfileImage");

    if (savedProfileImage) {

        const dashboardAvatar =
            document.getElementById("dashboardAvatar");

        if (dashboardAvatar) {
            dashboardAvatar.src = savedProfileImage;
        }
    }


    // ===========================================
    // TODAY'S GOAL
    // Circular progress ring
    // ===========================================

    const circleWrapper =
        document.getElementById("todayGoalCircle");

    const circleFill =
        document.getElementById("circleFill");

    if (circleWrapper && circleFill) {

        const percent =
            Number(circleWrapper.dataset.percent);

        const radius = 52;

        const circumference =
            2 * Math.PI * radius;

        circleFill.style.strokeDasharray =
            `${circumference}`;

        circleFill.style.strokeDashoffset =
            `${circumference -
            (percent / 100) * circumference}`;
    }

});