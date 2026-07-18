import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) {
        console.error("loginForm not found");
        return;
    }

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        try {

            const userCredential =
                await signInWithEmailAndPassword(auth, email, password);

            console.log("Logged in:", userCredential.user);

            window.location.href = "dashboard.html";

        } catch (error) {

            console.error(error);

            alert(error.message);

        }

    });

});
