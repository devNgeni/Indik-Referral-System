import React, { useState, useEffect } from 'react'
import Pop from '../components/popout/Pop'

function PopOut() {

    const [user, setUser] = useState({})

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("userInfo"));
    
        setUser(currentUser.user);
      }, []);
    
        return (
            <>
                <Pop {...user}/>
            </>
        )
    }

export default PopOut
