/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { GlobalContext } from '../context/context';



const MyTweets = () => {
    const { state } = useContext(GlobalContext)
    let history = useHistory();
    useEffect(() => {
        if (!state.authUser.email || state.authUser.value === "undef") {
            history.push('/signin');
        }
    }, [])

    return (
        <div>
            Hello wow nice Tweets
        </div>
    )
}

export default MyTweets
