// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnQPAN_8PWrcffbHlduyfIX9d-OeBR9jY",
  authDomain: "tiendafowards.firebaseapp.com",
  projectId: "tiendafowards",
  storageBucket: "tiendafowards.appspot.com",
  messagingSenderId: "458737519725",
  appId: "1:458737519725:web:c207d8b204dac73b5cc364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);