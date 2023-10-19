// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU8jxyxNykPUvBc2bHmIsM4GF7W3-Y8dM",
  authDomain: "giga-gadget.firebaseapp.com",
  projectId: "giga-gadget",
  storageBucket: "giga-gadget.appspot.com",
  messagingSenderId: "227223462875",
  appId: "1:227223462875:web:173861c7c2f96c08f93dfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;