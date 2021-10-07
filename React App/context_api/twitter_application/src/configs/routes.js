import React, { useContext, useEffect } from "react";
import {auth , onAuthStateChanged } from "../configs/firebase";
import { GlobalContext } from '../context/context'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import Signup from "../screens/signup";
import Signin from "../screens/signin";
import Home from "../screens/Home";
import MyTweets from "../screens/MyTweets";

export default function App() {
    const {dispatch } = useContext(GlobalContext);

    // useEffect(() => {
    //    console.log(state.authUser);
    // }, [state.authUser])

    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({ type: "AUTH_USER", payload: user });
            }
            else {
            }
        })
    });

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
                    <Route  path="/">
                        <Signup />
                    </Route>
                   
                </Switch>
            </div>
        </Router>
    );
}