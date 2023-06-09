import React, { useState } from 'react';
import app from '../../firebase/firebase.init';
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth"

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            {/** user ? logout : sign in */}

            { user?
                <button onClick={handleSignOut}>SignOut</button>:
                <button onClick={handleGoogleSignIn}>Google login</button>
            }
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;