import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
// import FreeAPI from '../screens/free-api';
import AnimalAPI from '../screens/homePage';
import Snacks from '../screens/snacks';
import Signup from "../screens/signup";
import Signin from "../screens/signin";

export default function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/homePage">
                        <AnimalAPI />
                    </Route>
                    <Route path="/snacks">
                        <Snacks />
                    </Route>
                    <Route path="/signin">
                        <Signin />
                    </Route>
                    {/* <Route path="/">
                        <FreeAPI />
                    </Route> */}

                </Switch>
            </div>
        </Router>
    );
}