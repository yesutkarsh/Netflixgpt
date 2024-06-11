// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1jZaY7uZrGFGuLHDnrV7zjfvBAmUygWU",
  authDomain: "fee-status.firebaseapp.com",
  databaseURL: "https://fee-status-default-rtdb.firebaseio.com",
  projectId: "fee-status",
  storageBucket: "fee-status.appspot.com",
  messagingSenderId: "142651785612",
  appId: "1:142651785612:web:293d34242152c55a1a56a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()