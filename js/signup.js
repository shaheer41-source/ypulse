
import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const fullName = document.getElementById("fullName").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){

        alert("Passwords do not match.");

        return;

    }

    try{

        const userCredential =
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        await setDoc(

            doc(db,"users",userCredential.user.uid),

            {

                name:fullName,

                email:email,

                createdAt:new Date()

            }

        );

        alert("Account created successfully!");

        window.location.href="login.html";

    }

    catch(error){

        alert(error.message);

    }

});
