
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

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


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app);

export const updateStock = async (id, quantity) => {
	const item = await getDoc(doc(db, "tours", id))
	await updateDoc(doc(db, "tours", id), {
		stock: item.data().stock - quantity,
	})
}
export default app;


