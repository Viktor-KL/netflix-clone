// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7eaogWgoCKHKQrU87N4sIBJB6YhWtGVE",
    authDomain: "netflix-clone-93095.firebaseapp.com",
    projectId: "netflix-clone-93095",
    storageBucket: "netflix-clone-93095.appspot.com",
    messagingSenderId: "587569529627",
    appId: "1:587569529627:web:d25af0b44bd33fdcf0c9be"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }