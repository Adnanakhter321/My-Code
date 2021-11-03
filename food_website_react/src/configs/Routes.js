import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Navbar from '../screens/Navbar'
const Routes = () => {
    return (
      
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'  component={SignUp} />
                <Route  path='/SignIn' component={SignIn} />
                {/* <Route  path="/about" component={About} />
                <Route  path="/student" component={Student} />
                <Route  path="/student-details/:rollNumber" component={studentdetails} /> */}
            </Switch>
        </Router>
    )
}

export default Routes;
