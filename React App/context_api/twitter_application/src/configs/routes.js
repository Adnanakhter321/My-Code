import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import Signup from "../screens/signup";
import Signin from "../screens/signin";
import Home from "../screens/Home";

export default function App() {
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
                    <Route  path="/">
                        <Signup />
                    </Route>
                   
                </Switch>
            </div>
        </Router>
    );
}