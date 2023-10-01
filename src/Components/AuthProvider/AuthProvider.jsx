import React from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export let AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    let googleLogin=()=>{
       return signInWithPopup(auth, provider);
    }

    let register=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    






    let authentication = {
        googleLogin,
        register
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;