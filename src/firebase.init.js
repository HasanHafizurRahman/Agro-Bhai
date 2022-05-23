// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwHTfwIWAuL8hLnFVY-KK25o-n_X24OBA",
  authDomain: "agro-manufacture.firebaseapp.com",
  projectId: "agro-manufacture",
  storageBucket: "agro-manufacture.appspot.com",
  messagingSenderId: "23100107848",
  appId: "1:23100107848:web:e52298c4dadd7713fd7c7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;