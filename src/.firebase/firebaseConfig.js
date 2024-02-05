import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKXXdlXhVnqlA8WbhLZw67BAaf_NoFQcA",
  authDomain: "react-shopping-mall-b9c50.firebaseapp.com",
  projectId: "react-shopping-mall-b9c50",
  storageBucket: "react-shopping-mall-b9c50.appspot.com",
  messagingSenderId: "405832282195",
  appId: "1:405832282195:web:e45082fe2f849bbd3196a6",
  measurementId: "G-F3NF6S99ZR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, auth, analytics };
