import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA8-HoFPaieujW68fpC6r__VYOX7ELhHMo",
  authDomain: "droptight-f9a8a.firebaseapp.com",
  projectId: "droptight-f9a8a",
  storageBucket: "droptight-f9a8a.appspot.com",
  messagingSenderId: "105827169125",
  appId: "1:105827169125:web:41962045d46dfe1910678c"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
