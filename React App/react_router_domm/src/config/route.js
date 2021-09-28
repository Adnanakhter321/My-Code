import React from 'react'
import Navbar from "../components/Navbar"
import Home from '../screens/Home';
import About from '../screens/About';
import Student from '../screens/Student';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import studentdetails from '../screens/student-details';

function route() {
    return (

        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route  path="/about" component={About} />
                <Route  path="/student" component={Student} />
                <Route  path="/student-details/:rollNumber" component={studentdetails} />
            </Switch>

        </Router>

    )
}
export default route;