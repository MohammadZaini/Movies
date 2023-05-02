import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBsckPS8KFAAWvLcqEOvjMscX6XzMoCCgo",
    authDomain: "movies-3d495.firebaseapp.com",
    projectId: "movies-3d495",
    storageBucket: "movies-3d495.appspot.com",
    messagingSenderId: "408703631948",
    appId: "1:408703631948:web:2e1178ddb6fe653196aae9",
    measurementId: "G-3J5P80SWQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);