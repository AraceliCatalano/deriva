// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJhYIA119TzyDDVWJOWV7mrWeaT_w0mZk",
    authDomain: "deriva-debe3.firebaseapp.com",
    projectId: "deriva-debe3",
    storageBucket: "deriva-debe3.appspot.com",
    messagingSenderId: "541986938083",
    appId: "1:541986938083:web:e1620eca2b633ffca939d6",
    measurementId: "G-877NDZ3RMJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth =getAuth(app);
export default app;
//Esto no garantiza tener FB DD, eso se crea aparte.


