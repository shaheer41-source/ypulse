// Firebase Configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Config

const firebaseConfig = {

    apiKey: "AIzaSyDz2BsOjWZRQL3IS9_ySwFX3-SYQWrCFz4",

    authDomain: "ymax-97101.firebaseapp.com",

    projectId: "ymax-97101",

    storageBucket: "ymax-97101.firebasestorage.app",

    messagingSenderId: "973159437541",

    appId: "1:973159437541:web:a9151ed9c8c05967c6700c"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Authentication

const auth = getAuth(app);

// Firestore Database

const db = getFirestore(app);

export { auth, db };
