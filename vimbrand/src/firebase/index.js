// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	Timestamp,
	updateDoc,
} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4DywWQrtzA0-gncnkGeVaF2I0F19DAzo",
  authDomain: "pasteleria-ecommerce.firebaseapp.com",
  projectId: "pasteleria-ecommerce",
  storageBucket: "pasteleria-ecommerce.appspot.com",
  messagingSenderId: "339974683426",
  appId: "1:339974683426:web:087de285f111760b94037b"
};



// export const getItems = async () => {
// 	const items = await getDocs(collection(db, "items"))
// 	return items
// }

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
