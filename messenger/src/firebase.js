import firebase from "firebase"
const firebaseApp= firebase.initializeApp( {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyBs3FXt4g5mnpncQMIcxRQUxk9fJokISW8",
  authDomain: "messenger-93b87.firebaseapp.com",
  projectId: "messenger-93b87",
  storageBucket: "messenger-93b87.appspot.com",
  messagingSenderId: "176173512481",
  appId: "1:176173512481:web:36f8260670db7b43387060",
  measurementId: "G-G3TK7MJKQN"
})

const db = firebaseApp.firestore()
export default db 