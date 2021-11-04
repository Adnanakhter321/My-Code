import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import UserInterface from "../components/UserInterface";
import Navbar from '../screens/Navbar'
const Routes = () => {
    return (
      
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'  component={SignUp} />
                <Route  path='/signin' component={SignIn} />
                <Route  path='/userinterface' component={UserInterface} />
                {/* <Route  path="/about" component={About} />
                <Route  path="/student" component={Student} />
                <Route  path="/student-details/:rollNumber" component={studentdetails} /> */}
            </Switch>
        </Router>
    )
}

export default Routes;
