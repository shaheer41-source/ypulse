import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

    const logoutBtn = document.getElementById("logoutBtn");
    const userEmail = document.getElementById("userEmail");
    const userName = document.getElementById("userName");

    onAuthStateChanged(auth, (user) => {

        if (!user) {
            window.location.href = "login.html";
            return;
        }

        if (userEmail) {
            userEmail.textContent = user.email;
        }

        if (userName) {
            userName.textContent = user.displayName || "User";
        }

    });

    if (logoutBtn) {

        logoutBtn.addEventListener("click", async () => {

            try {

                await signOut(auth);

                alert("Logged out successfully.");

                window.location.href = "login.html";

            } catch (error) {

                console.error(error);

                alert(error.message);

            }

        });

    } else {

        console.error("Logout button not found.");

    }

});
