import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext =createContext();
const Provider = ({children}) => {
    const auth =getAuth(app);
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);

    const createUser=(email,pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass);

    }
    useEffect(()=>{
       const subscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log("current user is ",currentUser)
        setLoading(false);
        });
        return ()=>{
            return subscribe(); 
        }

    },[])
    const signIn =(email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
    }
    return (
      <AuthContext.Provider value={authInfo}>
              {children}
      </AuthContext.Provider>
    );
};

export default Provider;