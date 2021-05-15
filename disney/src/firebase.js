import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyDY_vHSyoc5Lt-5r2TXf7mNkTh7zk72wF4",
    authDomain: "disneyplus-clone-e22ca.firebaseapp.com",
    projectId: "disneyplus-clone-e22ca",
    storageBucket: "disneyplus-clone-e22ca.appspot.com",
    messagingSenderId: "520366362734",
    appId: "1:520366362734:web:400c1f2297e39ada32567f",
    measurementId: "G-J0GNJGPQ91"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

  export {auth, provider,storage};
  export default db;
  