/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../context/context';
// import { auth, signOut, collection, getDoc,getDocs,  db, doc, setDoc} from '../configs/firebase'
import { auth, signOut, doc, collection, getDocs, db, setDoc, updateDoc, onSnapshot } from '../configs/firebase'

function AnimalAPI() {
    // Creating Unique Key
    var crypto = require("crypto");
    var uKey = crypto.randomBytes(15).toString('hex');
    // -------------------------------------------------------
    const [textf, settextf] = useState('')
    const [Tweets, setTweets] = useState([])
    const [Ref, setRef] = useState('hi')
    const tweetDone = async () => {
        const collec = collection(db, "Users")
        const querySnapshot = await getDocs(collec);
        querySnapshot.forEach(async (doc2) => {
            if (doc2.data().uid === state.authUser.uid) {
                let { email, uid, userName } = doc2.data()
                let user = { email, Likes: 0, userUID: uid, postKey: uKey, Time: date(new Date()), userName, Tweet: textf }
                let tweet = doc(db, 'Tweets', uKey);
                await setDoc(tweet, user);

                // rerender component 
                setRef('')
                console.log(Ref);
                setTimeout(() => {
                    setRef('hi')
                }, 500);
            }
        });
        settextf('')
    }
    const Refresh = () => {

        history.push('nopagexxxxxxx')
        setTimeout(() => {
            history.push('home')
        }, 0);
        // forceUpdate()
        // setRef('')
        // console.log(Ref);
        // setTimeout(() => {
        //     setRef('hi')
        // }, 500);
    }

    function date(dat) {
        let time = new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
        let date2 = dat.toString(dat)
        let date = date2.slice(0, 16);
        let data = time + ' ' + date;
        return data;
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

    useEffect(() => {
        if (!state.authUser.email || state.authUser.value === "undef") {
            history.push('/signin');
        }
    }, [])
    let Clone = Tweets.slice(0)
    useEffect(() => {
        const q = collection(db, "Tweets")
        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {

                    // rerendring Page
                    setRef('')
                    setTimeout(() => {
                        setRef('hi')
                    }, 500);


                    Clone.push(change.doc.data())
                }
                if (change.type === "modified") {
                   // rerendring Page
                    setRef('')
                    setTimeout(() => {
                        setRef('hi')
                    }, 500);
                }
            });
            setTweets(Clone)
        });
    }, [])


    return (
        <div className='container my-3' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginLeft: 'auto' }}>
                <button className="btn btn-primary" onClick={Logout}>Logout</button></div>
            <h1>Write a Tweet</h1>
            <div style={{ padding: '15px' }}>
                <div className="input-group input-group-lg">
                    <textarea type="text" cols='90' rows='5' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={textf} onChange={(ev) => {
                        if (textf.length <= 279) {
                            settextf(ev.target.value)
                        }
                        if (textf.length >= 280) {
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
            <div className='my-5 container' style={{ borderTop: '1px grey solid', margin: '0 auto', maxWidth: '50rem' }}>
                <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>Tweets</h1> <button className="btn btn-primary btn-lg mt-4 mx-3" onClick={Refresh}>Hard Refresh</button>
                {

                    Tweets.map((docc, index) => (
                        <div key={index} id={docc.postKey} className='my-4 navbar-light h-50' style={{ backgroundColor: '#f2faff', borderRadius: '1rem', borderBottom: '1px solid grey' }}>
                            <div className="mt-4 " style={{ padding: '0.5rem 0.5rem 0.1rem 0.8rem' }}>
                                <h4>{docc.userName}<span className='h6 text-muted'> - {docc.Time}</span></h4>
                                <h2 className='my-4'>{docc.Tweet}</h2>
                                <h5 style={{ border: '1px solid grey', display: 'inline-flex', padding: '1px 2px 1px 2px', cursor: 'pointer', borderRadius: '3rem', userSelect: 'none' }} onClick={ async(ev) => {
                                    let compID = ev.target.parentNode.parentNode.id
                                    const washingtonRef = doc(db, "Tweets", compID);
                                  await  updateDoc(washingtonRef, {
                                        "Likes": docc.Likes++
                                    });
                                }}>Like {docc.Likes}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default AnimalAPI;

