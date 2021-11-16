import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router'
import { auth, onAuthStateChanged } from "../configs/Firebase";
const ReactBones = () => {

    let currentUser = useSelector((State) => State.todoReducer.AllRestaurants)
    let history = useHistory();
    let location = useLocation();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                for (let i = 0; i < currentUser.length; i++) {
                    const el = currentUser[i];
                    if (el.Email === user.email) {
                        if (location.pathname === '/') {
                            history.push('/orders')
                            return;
                        }
                    }
                    else if (el.Email !== user.email) {
                        if (location.pathname === '/') {
                            history.push('/userinterface')
                            return;
                        }
                    }
                }
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser])
    return (
        <Skeleton count={15} />
    )
}

export default ReactBones
