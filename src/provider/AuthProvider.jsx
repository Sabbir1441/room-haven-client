import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const userLogin = (email , password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const authInfo = {
        user,
        setUser,
        loading,
        createNewUser,
        userLogin,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured' , currentUser)
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;