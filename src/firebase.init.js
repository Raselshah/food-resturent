// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfrB2GAclTSUCqWGnTC6rCg1chpxz9lj4",
  authDomain: "food-resturent-5b8e6.firebaseapp.com",
  projectId: "food-resturent-5b8e6",
  storageBucket: "food-resturent-5b8e6.appspot.com",
  messagingSenderId: "246381288119",
  appId: "1:246381288119:web:10d672070b66dbd17f8b32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
