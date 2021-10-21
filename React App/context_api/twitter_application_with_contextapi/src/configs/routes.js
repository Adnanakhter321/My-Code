import React, { useContext, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import Signup from "../screens/signup";
import Signin from "../screens/signin";
import Home from "../screens/Home";
import { auth, onAuthStateChanged } from "./firebase";
import { GlobalContext } from '../context/context'
import MyTweets from "../screens/MyTweets";
import {  collection, db , onSnapshot} from '../configs/firebase'


export default function App() {
    const {state,   dispatch } = useContext(GlobalContext)

    useEffect(() => {
        const q = collection(db, "Tweets")
        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                   dispatch({ type: "ADD_TWEET", payload: change.doc.data() })
                }
                if (change.type === "modified") {
                    addTweetData()
                }
            });
        });
        
        const a = collection(db, "likeData");
        onSnapshot(a, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    dispatch({ type: "LIKE_DATA", payload: change.doc.data() })
                }
                if (change.type === "modified") {
                    addlikeData();
                }
            });
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let addlikeData = () =>{
        dispatch({ type: "DELETE_LIKE"})
        const a = collection(db, "likeData");
        onSnapshot(a, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    dispatch({ type: "LIKE_DATA", payload: change.doc.data() })
                }
            });
        });
        
    }
    let addTweetData = () =>{
        dispatch({ type: "DELETE_TWEET"})
        const a = collection(db, "Tweets");
        onSnapshot(a, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    dispatch({ type: "ADD_TWEET", payload: change.doc.data() })
                }
            });
        });
    }


  



    
    // let reRender = () =>{
    //     setRef('')
    //     setTimeout(() => {
    //         setRef('hi')
    //     }, 0);
    // }

  useEffect(() => {
    onAuthStateChanged( auth, (user) => {
        if (user) {
            dispatch({ type: "USER_LOGIN", payload: user })
        }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/signin">
                        <Signin />
                    </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/mytweets">
                            <MyTweets />
                        </Route>
                    <Route path="/">
                        <Signup />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}