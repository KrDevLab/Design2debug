// js/firebase-init.js
//
// IMPORTANT: This project loads Firebase via the *compat* SDK <script> tags
// in testimonials.html (firebase-app-compat.js, firebase-firestore-compat.js).
// That means we must initialize with the global `firebase` object and
// firebase.initializeApp(), NOT the modular `import { initializeApp } from
// "firebase/app"` syntax. Using the modular import here (without
// type="module" on the <script> tag) throws a silent syntax error, window.db
// never gets created, and every testimonial read/write fails with
// "Something went wrong."

const firebaseConfig = {
  apiKey: "AIzaSyCd9addPK-sjolkoyQvLGgPSls_lLq4HJk",
  authDomain: "design2debug-e3057.firebaseapp.com",
  projectId: "design2debug-e3057",
  storageBucket: "design2debug-e3057.firebasestorage.app",
  messagingSenderId: "7632002958",
  appId: "1:7632002958:web:57e4c8f83e59fb59214edf",
  measurementId: "G-RPZ6478K25"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

window.db = firebase.firestore();

// Shared Firestore handle used by js/data/testimonials.js


// Optional: only enable this if you also load
// https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics-compat.js
// in testimonials.html. Left commented out since that script tag isn't
// currently included.
// firebase.analytics();