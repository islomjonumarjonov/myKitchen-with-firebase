import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5SeSow6o0K60SJWPBuJjfFCoVsY9MKb8",
  authDomain: "new-recipes-c5dc2.firebaseapp.com",
  projectId: "new-recipes-c5dc2",
  storageBucket: "new-recipes-c5dc2.appspot.com",
  messagingSenderId: "827802626164",
  appId: "1:827802626164:web:020a49f66366e85e83c921",
  measurementId: "G-GYYYC7QM5J",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDCz0jFkoc55TSxJO2jVrhhvAeBe3Bxmj4",
//   authDomain: "aasa-43607.firebaseapp.com",
//   projectId: "aasa-43607",
//   storageBucket: "aasa-43607.appspot.com",
//   messagingSenderId: "713294030807",
//   appId: "1:713294030807:web:b89d5198c4899d9099cd92",
//   measurementId: "G-KNJEBVHZ9E",
// };

const app = initializeApp(firebaseConfig);

//Installize
const auth = getAuth(app);
export { auth };

//
