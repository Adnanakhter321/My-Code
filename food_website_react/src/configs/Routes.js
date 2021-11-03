import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SignUp from "../components/SignUp";
const Routes = () => {
    return (
      
        <Router>
            <Switch>
                <Route exact path='/' component={SignUp} />
                {/* <Route  path="/about" component={About} />
                <Route  path="/student" component={Student} />
                <Route  path="/student-details/:rollNumber" component={studentdetails} /> */}
            </Switch>
        </Router>
    )
}

export default Routes;
