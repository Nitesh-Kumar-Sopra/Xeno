import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCQXE1w5Q4yrcZ7PZpTheHT9WoyeIPDhIk",
  authDomain: "xeno-c9463.firebaseapp.com",
  projectId: "xeno-c9463",
  storageBucket: "xeno-c9463.appspot.com",
  messagingSenderId: "1068966032356",
  appId: "1:1068966032356:web:ab4b82ce8a182d599f8df1",
  measurementId: "G-Z09WB6B9EC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};