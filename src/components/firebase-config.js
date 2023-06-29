import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBXy5QkcY97Pmu4OJbyhSrXxg64I2a4aL0",
    authDomain: "food-starter-app-cc027.firebaseapp.com",
    projectId: "food-starter-app-cc027",
    storageBucket: "food-starter-app-cc027.appspot.com",
    messagingSenderId: "746928997181",
    appId: "1:746928997181:web:452e5a0b7a9ad62c7c7b54",
    measurementId: "G-CK59N5K7VE"
  };

  
 

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);