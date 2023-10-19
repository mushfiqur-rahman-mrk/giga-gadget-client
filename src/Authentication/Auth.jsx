import  { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from './firebase.config';


export const AuthContext=createContext(null)

const Auth = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    // create user with emai and password
    const emailSignUp=(email, password)=>{
        return    createUserWithEmailAndPassword(auth,email, password)
    }
    // email log in 
    const emailLogIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google sign in
    const googleProvider= new GoogleAuthProvider()
    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    // log out
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    // ovservation on user activity
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
        },[])


    const authinfo={user,emailSignUp,emailLogIn,googleSignIn,logOut,loading}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

Auth.propTypes = {
    children: PropTypes.node,
};

export default Auth;