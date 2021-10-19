import { getAuth, sendEmailVerification, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
// import { useHistory } from "react-router-dom";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    // SIGN IN USING GOOGLE START FROM HERE----------------
    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }
    // SIGN IN USING GOOGLE START FROM HERE----------------


    // SIGN IN USING EMAIL AND PASSWORD --------------------
    const signInUsingEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // SIGN IN USING EMAIL AND PASSWORD --------------------

    // REGISTRATION FUNCTION START FROM HERE --------------------
    const registerNewUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // const user = result.user;
                setError('');
                verifyEmail();
                setUserName(name);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // update profile name
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                // setUser(user);
            })
    }

    // email verification
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {

            })
    }
    // REGISTRATION FUNCTION END FROM HERE --------------------

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        signInUsingEmail,
        registerNewUser,
        setUserName,
        verifyEmail,
        error,
    }
}

export default useFirebase;