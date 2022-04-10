import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjkVzRaBof_NLZ1Ms3K9Chcv_D3BHe3yc",
  authDomain: "genius-car-services-868fe.firebaseapp.com",
  projectId: "genius-car-services-868fe",
  storageBucket: "genius-car-services-868fe.appspot.com",
  messagingSenderId: "146304114392",
  appId: "1:146304114392:web:da86f2609612e6f2d001ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
