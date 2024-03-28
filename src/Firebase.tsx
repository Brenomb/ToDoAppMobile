import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuw2-qLDr_iD59CovzXyQaD31GsMnu2ik",
  authDomain: "ionic-app-48e8b.firebaseapp.com",
  projectId: "ionic-app-48e8b",
  storageBucket: "ionic-app-48e8b.appspot.com",
  messagingSenderId: "608013119562",
  appId: "1:608013119562:web:268c5c1172447f65f1f6b3",
  measurementId: "G-LDQ8XQ5TKN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
