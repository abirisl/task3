// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7UfvhfC9EiB-lTf6AXQcQfidf9VbzrBE",
  authDomain: "task3-56eb6.firebaseapp.com",
  projectId: "task3-56eb6",
  storageBucket: "task3-56eb6.appspot.com",
  messagingSenderId: "915271899458",
  appId: "1:915271899458:web:a5429455447fda256850db",
  measurementId: "G-RYD9VL839V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;