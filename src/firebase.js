import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBePrMgCPblx-rQStdrCXLiaBiNDUxcqHk",
    authDomain: "tinder-8e87f.firebaseapp.com",
    projectId: "tinder-8e87f",
    storageBucket: "tinder-8e87f.appspot.com",
    messagingSenderId: "157071710384",
    appId: "1:157071710384:web:cf8170adfe4cc16c7cc375",
    measurementId: "G-HZ7HKY5Q99"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;