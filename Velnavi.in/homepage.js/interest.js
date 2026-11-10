// ===========================================
// DYNAMIC PROGRESS STEP - Step 1 (Profile) ko
// "completed" dikhana, agar localStorage confirm
// kare ki user Setup Profile complete kar chuka hai.
// ===========================================
const step1 = document.getElementById("step1");
const step1Circle = document.getElementById("step1Circle");
const line1 = document.getElementById("line1");

const profileDone = localStorage.getItem("velnavi_profileComplete");

if (profileDone === "true") {
    step1.classList.add("completed");
    step1Circle.innerHTML = "&#10003;"; // checkmark icon
    line1.classList.add("completed");
}

// ===========================================
// INTEREST CHIPS - multi-select toggle
// ===========================================
const interestChips = document.querySelectorAll(".interest-chip");
const selectedCountText = document.getElementById("selectedCount");

function updateSelectedCount() {
    const selected = document.querySelectorAll(".interest-chip.selected").length;
    selectedCountText.textContent = selected + " selected";
}

interestChips.forEach(function (chip) {
    chip.addEventListener("click", function () {
        // Har chip apni "selected" state independently toggle karta hai
        // (single-select jaisa nahi - user multiple interests choose kar sakta hai)
        chip.classList.toggle("selected");
        updateSelectedCount();
    });
});

// ===========================================
// DAILY PRACTICE TIME - single select (radio jaisa)
// Ek time par sirf EK hi option select ho sakta hai,
// isliye click hote hi baaki sab se "selected" hata dete hain.
// ===========================================
const timeButtons = document.querySelectorAll(".time-btn");
const selectedTimeInput = document.getElementById("selectedTime");

timeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        timeButtons.forEach(function (b) {
            b.classList.remove("selected");
        });
        btn.classList.add("selected");
        selectedTimeInput.value = btn.getAttribute("data-time");
    });
});


// ===========================================
// FORM SUBMIT
// ===========================================
const interestsForm = document.getElementById("interestsForm");

interestsForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedChips = document.querySelectorAll(".interest-chip.selected");
    const selectedTime = selectedTimeInput.value;

    // Ab dono cheezein check ho rahi hain: kam se kam 1 interest,
    // aur ek daily practice time zaroor select hona chahiye
    if (selectedChips.length < 1 || !selectedTime) {
        alert("Please select at least one interest and your daily practice time.");
        return;
    }

    // Selected interests ki list nikaalo (data-interest attribute se)
    const interests = [];
    selectedChips.forEach(function (chip) {
        interests.push(chip.getAttribute("data-interest"));
    });

    // Is step ka completion save karo, taaki Dashboard page
    // pe Step 2 bhi "completed" dikh sake
    localStorage.setItem("velnavi_interestsComplete", "true");

    // Abhi ke liye demo - real project mein interests Firestore
    // mein save honge
    alert(
        "Interests saved: " + interests.join(", ") +
        "\nDaily Time: " + selectedTime +
        "\n(demo - we will connect you soon ,  we will inform you later thanks ! )"
    );

    // Real project mein:
    window.location.href = "../code/dashboard.js/dashboard.html";
});