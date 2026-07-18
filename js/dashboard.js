import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

    const logoutBtn = document.getElementById("logoutBtn");

    console.log("Dashboard loaded");
    console.log("Logout button:", logoutBtn);

    onAuthStateChanged(auth, (user) => {
        console.log("Current user:", user);

        if (!user) {
            window.location.href = "login.html";
            return;
        }

        document.getElementById("userEmail").textContent = user.email;
    });

    logoutBtn.addEventListener("click", async () => {

        console.log("Logout button clicked");

        try {
            await signOut(auth);
            console.log("User signed out");
            alert("Logged out successfully");
            window.location.href = "login.html";
        } catch (error) {
            console.error("Logout error:", error);
            alert(error.message);
        }

    });

});
