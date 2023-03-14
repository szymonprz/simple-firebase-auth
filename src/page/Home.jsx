import React, {useEffect} from 'react';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from '../firebase';

const Home = () => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("uid", uid)
            } else {
                console.log("user is logged out")
            }
        });

        const intervalID = setInterval(() => {
        }, 1000)

        return () => clearInterval(intervalID);
    }, [])

    return (
        <></>
    )
}

export default Home


