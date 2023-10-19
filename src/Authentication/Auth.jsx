import  { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from './firebase.config';


export const AuthContext=createContext(null)

const Auth = ({children}) => {
    const [user,setUser]=useState(null)
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
    const authinfo={user,emailSignUp,emailLogIn,googleSignIn}
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