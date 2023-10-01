import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD9ZYQho4nWj6lX3Y7FwpQEW59j9YsY_Y4",
  authDomain: "react-glasses-authentication.firebaseapp.com",
  projectId: "react-glasses-authentication",
  storageBucket: "react-glasses-authentication.appspot.com",
  messagingSenderId: "4732059185",
  appId: "1:4732059185:web:dfabbfe024f7b064fd9f10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);