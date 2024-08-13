// firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtJNQciDlhwHCtKg6WkduQ7rjbZKI6blE",
  authDomain: "seo-hub07.firebaseapp.com",
  projectId: "seo-hub07",
  storageBucket: "seo-hub07.appspot.com",
  messagingSenderId: "803858368907",
  appId: "1:803858368907:web:8b7acb2c0ed4917bc3c78e",
  measurementId: "G-ZPB6G32YC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
