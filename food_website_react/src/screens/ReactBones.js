import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useHistory, useLocation } from 'react-router'
import { auth, onAuthStateChanged } from "../configs/Firebase";
const ReactBones = () => {
    let history = useHistory();
    let location = useLocation()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (location.pathname === '/') {
                    history.push('/userinterface')
                }
                // else if (location.pathname === '/dishes') {
                //     history.push('/dishes')
                // }
                // else {
                //     history.push('/userinterface')
                // }
            }
            else {
                history.push('/signin')
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Skeleton count={15} />
    )
}

export default ReactBones
