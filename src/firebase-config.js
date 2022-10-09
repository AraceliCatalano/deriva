
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from 'firebase/storage';
 import { getFirestore, getDoc, updateDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth =getAuth(app);
export const db = getFirestore(app);
// const storage = getStorage(app);

// Manejar stock --> plus
export const updateStock = async (id, quantity) => {
	const item = await getDoc(doc(db, "tours", id))
	await updateDoc(doc(db, "tours", id), {
		stock: item.data().stock - quantity,
	})
}
export default app;
//Esto no garantiza tener FB DD, eso se crea aparte.


