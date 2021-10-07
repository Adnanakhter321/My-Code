import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { auth , onAuthStateChanged } from '../configs/firebase';

const MyTweets = () => {
    let history = useHistory();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                history.push('/signin')
            }
        })

    }, [history])

    return (
        <div>
            Hello My Tweets
        </div>
    )
}

export default MyTweets
