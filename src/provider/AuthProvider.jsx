import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => console.log(res.user))
    }
    const signInGmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => console.log(res.user))
    }
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => console.log(res.user))
    }
    const authData = {
        googleSignIn,
        signInGmailPassword,
        createUser
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;