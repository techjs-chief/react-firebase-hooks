import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "xxx",
  authDomain: "JS-IT-firebase.firebaseapp.com",
  databaseURL: "https://JS-IT-firebase.firebaseio.com",
  projectId: "JS-IT-firebase",
  storageBucket: "JS-IT-firebase.appspot.com",
  messagingSenderId: "xxx",
  appId: "xxx",
};

firebase.initializeApp(config);

export default firebase.database();
