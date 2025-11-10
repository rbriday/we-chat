// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY2w-ZtDXpPBIT68wv0951RGDwCdjOShs",
  authDomain: "we-chat-41f53.firebaseapp.com",
  databaseURL: "https://we-chat-41f53-default-rtdb.firebaseio.com",
  projectId: "we-chat-41f53",
  storageBucket: "we-chat-41f53.firebasestorage.app",
  messagingSenderId: "209193475687",
  appId: "1:209193475687:web:d77a79150954437a5cbec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;