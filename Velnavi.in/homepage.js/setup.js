// ===========================================
// LEVEL SELECTOR - buttons ke beech selection
// ===========================================
const levelButtons = document.querySelectorAll(".level-btn");
const selectedLevelInput = document.getElementById("selectedLevel");

levelButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        // Sabse pehle sab buttons se "selected" class hata do
        levelButtons.forEach(function (b) {
            b.classList.remove("selected");
        });

        // Fir jis button pe click hua, usko selected bana do
        btn.classList.add("selected");
        selectedLevelInput.value = btn.getAttribute("data-level");
    });
});

// ===========================================
// AVATAR UPLOAD PREVIEW + REMOVE PHOTO
// ===========================================
const avatarInput = document.getElementById("avatarInput");
const avatarPreview = document.getElementById("avatarPreview");
const removePhotoBtn = document.getElementById("removePhotoBtn");

avatarInput.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();  


   reader.onload = function (event) {
    const imageData = event.target.result;

    avatarPreview.innerHTML =
        '<img src="' + imageData + '" alt="Profile photo">';

    removePhotoBtn.style.display = "inline-block";

    localStorage.setItem("velnaviProfileImage", imageData);
}; 


    reader.readAsDataURL(file);
}); 


// Remove Photo button click - wapas default icon pe le aayega
removePhotoBtn.addEventListener("click", function () {
    avatarPreview.innerHTML = '<span class="avatar-placeholder">&#128100;</span>';
    avatarInput.value = ""; // file input reset - taaki same photo dubara select ho sake
    removePhotoBtn.style.display = "none"; // button wapas hide
});

// ===========================================
// FORM SUBMIT
// ===========================================
const setupProfileForm = document.getElementById("setupProfileForm");

setupProfileForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nativeLanguage = document.getElementById("nativeLanguage").value;
    const level = selectedLevelInput.value;
    const goal = document.getElementById("goal").value; 
    const ageGroup = document.getElementById("ageGroup").value; 
    const fullName = document.getElementById("fullName").value.trim();

    
if (!fullName || !nativeLanguage  || !level || !goal || !ageGroup) {
    alert("Please fill in all fields before continuing.");
    return;
}

    // Abhi ke liye demo - real project mein ye data Firestore mein
    // save hoga user ke profile document ke andar
       // localStorage mein profile save kar rahe hain (testing ke liye, Firebase baad mein aayega)
    const profileData = {
        fullName: fullName,
        ageGroup: ageGroup,
        nativeLanguage: nativeLanguage,
        level: level,
        goal: goal
    };
    localStorage.setItem("velnaviProfile", JSON.stringify(profileData)); 
    localStorage.setItem("velnavi_profileComplete", "true");

    window.location.href = "../code/interest.html";
});