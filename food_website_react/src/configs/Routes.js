import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import UserInterface from "../components/UserInterface";
import Navbar from '../screens/Navbar';
import { auth, onAuthStateChanged } from "../configs/Firebase";
import { useDispatch } from "react-redux";
import { CheckUser } from "../Actions/Actions";
const Routes = () => {
    let dispatch = useDispatch();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            if(user){
                dispatch(CheckUser("userExists", uid))
            }
        } else {
            dispatch(CheckUser('nouser', 'null'))
        }
      });
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
