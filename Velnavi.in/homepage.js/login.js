// ===========================================
// LOGIN FORM
// ===========================================
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // page reload hone se roka

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Basic validation
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    // Abhi ke liye demo alert - real project mein yahan Firebase Auth
    // ya backend API call lagegi login karne ke liye
    alert("Login attempt for " + email + " (demo - Firebase yahan connect hoga)");

    // Real project mein:
    // firebase.auth().signInWithEmailAndPassword(email, password)...
});