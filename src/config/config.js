import firebase from 'firebase';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDug7S02JsjGX29CFRBabcdTnlXBL-yMzQ",
    authDomain: "webpack-92a38.firebaseapp.com",
    databaseURL: "https://webpack-92a38.firebaseio.com",
    storageBucket: "webpack-92a38.appspot.com",
    messagingSenderId: "399018148090"
  };
  firebase.initializeApp(config);

export const database = firebase.database();
export const firebaseAuth = firebase.auth();