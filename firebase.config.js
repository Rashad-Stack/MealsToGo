// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOcDoje7O-kNw4jMMW7DttmBdgXTanlDE",
  authDomain: "mealstogo-27d80.firebaseapp.com",
  projectId: "mealstogo-27d80",
  storageBucket: "mealstogo-27d80.appspot.com",
  messagingSenderId: "1024312319061",
  appId: "1:1024312319061:web:46328c691b40e54b8248dc",
};

// Initialize Firebase
export const app =
  getApps.length > 0 ? getApps() : initializeApp(firebaseConfig);
