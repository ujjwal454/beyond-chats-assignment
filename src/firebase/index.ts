// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGuoc9WobrgKkjpi4G95EiyBUabfndeDI",
  authDomain: "test-auth-68738.firebaseapp.com",
  projectId: "test-auth-68738",
  storageBucket: "test-auth-68738.firebasestorage.app",
  messagingSenderId: "759118661567",
  appId: "1:759118661567:web:e9c7445ff6e7f50b48430a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
