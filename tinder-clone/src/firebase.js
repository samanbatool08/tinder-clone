import firebase from 'firebase';

const firebaseConfig = {
      apiKey: "AIzaSyApJVKg2wlWBGTKtCWczM35-me3OPTCB70",
      authDomain: "tinder-clone-13ecf.firebaseapp.com",
      databaseURL: "https://tinder-clone-13ecf.firebaseio.com",
      projectId: "tinder-clone-13ecf",
      storageBucket: "tinder-clone-13ecf.appspot.com",
      messagingSenderId: "905775409462",
      appId: "1:905775409462:web:a00d25be622a6f1a8f2b97",
      measurementId: "G-DD0FK49EEB"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;