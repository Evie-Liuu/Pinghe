// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPw8mtj5DM7z9g5MHOfHhDPuqJl4RmX3k",
  authDomain: "sdgs-journey.firebaseapp.com",
  projectId: "sdgs-journey",
  storageBucket: "sdgs-journey.firebasestorage.app",
  messagingSenderId: "233910289851",
  appId: "1:233910289851:web:e2641b83540889819a309e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
