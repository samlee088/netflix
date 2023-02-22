import React from 'react';
import Nav from '../Nav';
import PlansScreen from './PlansScreen';
import './ProfileScreen.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';


function ProfileScreen() {

    const user = useSelector(selectUser);
    const navigate = useNavigate ();

    const handleLogOut = () => {
        auth.signOut();
        navigate('/');
    }



    return (
        <div className = 'profileScreen'>
            < Nav />
            <div className = 'profileScreen_body'>
                <h1> Edit Profile </h1>
                <div className = 'profileScreen_info'>
                    <img 
                        src = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
                        alt='netflix profile'
                    />
                    <div className = 'profileScreen_details'>
                        <h2>{user.email}</h2>
                        <div className = 'profileScreen_plans'>
                            <h3> Plans </h3>

                            < PlansScreen />

                            <button 
                                onClick = { handleLogOut } 
                                className = 'profileScreen_signOut'
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen