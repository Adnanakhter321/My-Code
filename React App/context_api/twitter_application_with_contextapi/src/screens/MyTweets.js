/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { GlobalContext } from '../context/context';
// import {doc, db, setDoc } from '../configs/firebase'
// import { collection, onSnapshot ,db } from "../configs/firebase";

const MyTweets = () => {

    const tweetDone = async () => {
        // var crypto = require("crypto");
        // var id = crypto.randomBytes(15).toString('hex');
        // console.log(id);

        // function date(dat) {
        //     let time = new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
        //     let date2 = dat.toString(dat)
        //     let date = date2.slice(0, 16);
        //     let data = time + ' ' + date;
        //     return data;
        // }
        // console.log(date(new Date()));


        // const q = collection(db, "Tweets")
        // onSnapshot(q, (snapshot) => {
        //     snapshot.docChanges().forEach((change) => {
        //         if (change.type === "added") {
        //             console.log("New city: ", change.doc.data());
        //         }
        //     });
        // });

        console.log('HI');











    }


    const { state } = useContext(GlobalContext)
    let history = useHistory();
    useEffect(() => {
        if (!state.authUser.email || state.authUser.value === "undef") {
            history.push('/signin');
        }
    }, [])

    return (
        <div onClick={tweetDone}>
            Hello wow nice Tweets
        </div>
    )
}

export default MyTweets
