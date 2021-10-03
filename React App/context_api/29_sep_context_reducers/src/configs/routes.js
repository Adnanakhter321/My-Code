import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import AnimalAPI from '../screens/homePage';
import Snacks from '../screens/snacks';
import Signup from "../screens/signup";
import Signin from "../screens/signin";
import Allstudents from "../screens/AllStudents"
import AddStudents from "../screens/AddStudents";

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
                    <Route path="/allstudents">
                        <Allstudents />
                    </Route>
                    <Route path="/addstudents">
                        <AddStudents />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}