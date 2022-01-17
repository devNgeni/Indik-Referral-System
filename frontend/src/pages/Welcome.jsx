import React from 'react';
import Welcome from '../components/welcome/Welcome'
import Navbar from '../components/navbar/Navbar'
function UserWelcome({ toggle }) {
        return (
            <>
            <Navbar onClick={toggle}/>
            <Welcome />
            </>
        )
    }

export default UserWelcome
