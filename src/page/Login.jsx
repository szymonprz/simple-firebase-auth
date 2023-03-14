import React from 'react';
import {auth} from '../firebase';
import {useNavigate} from 'react-router-dom'
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, new GoogleAuthProvider());
            const user = res.user;
            const token = await user.getIdToken(false);
            console.log(token);
            navigate("/home")
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <>
            <div>
                <button
                    onClick={signInWithGoogle}
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Login
                </button>
            </div>

        </>
    )
}

export default Login
