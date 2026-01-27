// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//confuguración de Storage


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwdB5eV2P8O7dAzAWtfWD0hwb9BURSkz0",
  authDomain: "tienda-maquillaje-vue.firebaseapp.com",
  projectId: "tienda-maquillaje-vue",
  storageBucket: "tienda-maquillaje-vue.firebasestorage.app",
  messagingSenderId: "544232444238",
  appId: "1:544232444238:web:e9478fc011152e358f0e1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

//inicializar Firestore y exportarlo
const db = getFirestore(app)

export {db}
export const storage = getStorage(app)