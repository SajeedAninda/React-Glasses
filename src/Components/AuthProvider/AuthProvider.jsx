import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export let AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    let [currentUser, setCurrentUser] = useState(null);

    let googleLogin = () => {
        return signInWithPopup(auth, provider);
    }

    let register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    let logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
    }, [])





    let authentication = {
        googleLogin,
        register,
        login,
        logOut,
        currentUser
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;