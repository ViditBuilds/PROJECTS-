




// ===========================================
// SIGNUP FORM
// ===========================================
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // page reload hone se roka

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Basic validation
    if (!firstName || !lastName || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password should be at least 6 characters.");
        return;
    }

    // Signup successful - setup profile page par le jao
    window.location.href = "../setup-profile/setup-profile.html";

    // Real project mein, redirect se PEHLE ye call hoga:
    // firebase.auth().createUserWithEmailAndPassword(email, password)...
});

// ============================================================
// TEMPORARY DEV SKIP LINK
// Bina form bhare, bina validation ke seedha setup-profile.html
// pe le jaata hai - sirf development/testing ke liye.
// MVP complete hone ke baad ye poora block delete kar dena.
// ============================================================
const devSkipLink = document.getElementById("devSkipLink");

if (devSkipLink) {
    devSkipLink.addEventListener("click", function (e) {
        e.preventDefault(); // link ka default "#" navigation rokaa
        window.location.href = "../setup-profile/setup-profile.html";
    });
}