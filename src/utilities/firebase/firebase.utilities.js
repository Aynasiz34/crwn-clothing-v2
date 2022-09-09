import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAsvk2l8OfF6Cn9QjX4kxNdx1pOcbhyJJk",
    authDomain: "talazlar-konfeksiyon.firebaseapp.com",
    projectId: "talazlar-konfeksiyon",
    storageBucket: "talazlar-konfeksiyon.appspot.com",
    messagingSenderId: "743346499260",
    appId: "1:743346499260:web:2eebfe0f22cd045758aab9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// db = database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnaphot = await getDoc(userDocRef);

    //if user data NOT exist
    if (!userSnaphot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        };

    };

    //if user data exist
    return userDocRef;
}