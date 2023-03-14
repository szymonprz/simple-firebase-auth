import React, {useEffect} from 'react';
import Text from '../elements/Text';
import Button from '../elements/Button';
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(undefined);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });

        const intervalID = setInterval(() => {
        }, 1000)

        return () => clearInterval(intervalID);
    }, [])

    const handleLogout = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/login");
            console.log("Signed out successfully")
        }).catch(() => {
        // An error happened.
        });

    }

    const getToken = async () => {
        if(user){
            const token = await user.getIdToken(false);
            console.log(token);
        }
    }
    
    return(
        <>
            <nav className="flex justify-between pt-8">
                <Text className="text-white font-bold text-xl">
                    Welcome, <span className="italic"> Name </span>
                </Text>
                <Button onClick={getToken} className="py-1 px-6">
                    Get token
                </Button>

                <Button onClick={handleLogout} className="py-1 px-6">
                    Logout
                </Button>
            </nav>
        </>
    )
}

export default Navbar;
