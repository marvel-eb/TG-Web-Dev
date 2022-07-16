// v9 compat packages are API compatible with v8 code //
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { firebaseConfig } from "./config";

const app = firebase.initializeApp(firebaseConfig); // ===
// firebase.initializeApp(firebaseConfig); //===
// export const db = firebase.firestore(); //===
// export const getAuth = firebase.firestore(); //===
// export const updateProfile = firebase.firestore(); //===

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

// for database
export const handleUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const { uid } = userAuth;
    const userRef = firestore.doc(`users/${uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email, phoneNumber, postalCode, profession } =
            userAuth;
        const timestamp = new Date();

        const userRoles = ["user"]; // === admin config

        try {
            await userRef.set({
                displayName,
                email,
                phoneNumber,
                postalCode,
                profession,
                created: timestamp,
                userRoles, // === admin config
                ...additionalData,
            });
        } catch (err) {
            // console log(err);
        }
    }
    return userRef;
};

export default app;
