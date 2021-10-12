/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../context/context';
// import { auth, signOut, collection, getDoc,getDocs,  db, doc, setDoc} from '../configs/firebase'
import { auth, signOut, collection, getDocs, db, addDoc} from '../configs/firebase'

function AnimalAPI() {
    // const [Users, setUsers] = useState()
    const [textf, settextf] = useState('')
    const tweetDone = async () => {
        const collec = collection(db, "Users")
        const querySnapshot = await getDocs(collec);
        querySnapshot.forEach( async (doc) => {
          if(doc.data().uid === state.authUser.uid){
              let {email , uid , userName} = doc.data()
            let user ={email, userUID: uid , userName ,Tweet :  textf}
            console.log(user);
            let tweet = collection(db, 'Tweets');
           let ad = await addDoc(tweet, user);
           console.log(ad);
          }
        });
        settextf('')
    }
    
    let history = useHistory()
    const { state, dispatch } = useContext(GlobalContext)
    const Logout = () => {
        signOut(auth).then((ev) => {
            console.log('signout done');
            history.push('/signin');
            dispatch({ type: "USER_LOGIN", payload: { value: 'undef' } })
        }).catch((er) => {
            console.log(er.message);
        })
    }
    // useEffect(async () => {
    //     const collec = collection(db, "Users")
    //     const querySnapshot = await getDocs(collec);
    //     querySnapshot.forEach((doc) => {
    //         let myStudentsClone = Users.slice(0);
    //         myStudentsClone.push(doc.data());
    //         setUsers(myStudentsClone);
    //       });
    // }, [])

    useEffect(() => {
        if (!state.authUser.email || state.authUser.value === "undef") {
            history.push('/signin');
        }
    }, [])

    return (
        <div className='container my-3' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginLeft: 'auto' }}>
                <button className="btn btn-primary" onClick={Logout}>Logout</button></div>
            <h1>Write a Tweet</h1>
            <div style={{ borderRight: 'double #0d6efd 7px', borderLeft: 'double #0d6efd 7px', padding: '15px' }}>
                <div className="input-group input-group-lg">
                    <textarea type="text" cols='90' rows='5' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={textf} onChange={(ev) => {
                        if (textf.length <= 279) {
                            settextf(ev.target.value)
                        }
                        if (textf.length >= 280) {
                            console.log(state.tweets);
                            let charac = textf.slice(0, 280)
                            settextf(charac)
                        }

                    }} placeholder="What's happening?" />
                </div>
                <small id="emailHelp" className="form-text text-muted">280 Max Characters</small>
                <div style={{ float: 'right' }}>
                    <button style={{ borderRadius: '20px' }} onClick={() => {
                        settextf("")
                    }} className="btn btn-primary btn-lg mt-4 mx-3" >Clear Text</button>
                    <button style={{ borderRadius: '20px' }} onClick={tweetDone} className="btn btn-primary btn-lg mt-4" >Tweet</button>
                </div>
            </div>
            <div className='my-5 container' style={{ borderTop: '1px grey solid', margin:'0 auto', maxWidth:'50rem' }}>
               <div className='my-4 navbar-light bg-primary bg-gradient h-50'>
                    <h1>sad</h1>
                    <h1>sad</h1>
                    <h1>sad</h1>
                    <h1>sad</h1>
               </div>
            </div>

        </div>
    );
}

export default AnimalAPI;

