import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router'
import { auth, onAuthStateChanged } from "../configs/Firebase";
const ReactBones = () => {
    const currentUser = useSelector((State) => State.todoReducer.user)
    let history = useHistory();
    let location = useLocation();
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // if (location.pathname === '/') {
                //     history.push('/userinterface')
                // }
                // else if (location.pathname === '/restauranthome') {
                //     history.push('/restauranthome')
                // }
                // else if (location.pathname === '/dishes') {
                //     history.push('/dishes')
                // }
                // else {
                //     if(currentUser[0] === 'userRestaurant'){
                //         history.push('/restauranthome')
                //     }
                //     else{
                //         history.push('/userinterface')
                //     }
                // }
            }
            else if (location.pathname === '/restaurantsignup') {
                history.push('/restaurantsignup')
            }
            else if (location.pathname === '/restaurantlogin') {
                history.push('/restaurantlogin')
            }
            else if (location.pathname === '/') {
                history.push('/')
            }
            else {
                history.push('/signin')
            }
        });
    }, [currentUser, history, location.pathname])
    return (
        <Skeleton count={15} />
    )
}

export default ReactBones
