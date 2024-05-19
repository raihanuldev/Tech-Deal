import { getAuth } from 'firebase/auth';
import { initializeApp, FirebaseApp } from "firebase/app";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyACgFoIsBXZL7nh-MMWu5JLZH8qvLusesQ",
  authDomain: "tech-deal-fe500.firebaseapp.com",
  projectId: "tech-deal-fe500",
  storageBucket: "tech-deal-fe500.appspot.com",
  messagingSenderId: "789476601072",
  appId: "1:789476601072:web:36c6037095406b8d34e635"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
