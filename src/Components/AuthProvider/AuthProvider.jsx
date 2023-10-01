import React from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


let AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    let google

    let authentication = {

    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;