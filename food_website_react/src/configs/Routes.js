import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import UserInterface from "../components/UserInterface";
import Navbar from '../screens/Navbar';
import { auth, onAuthStateChanged } from "../configs/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { CheckUser } from "../Actions/Actions";
import { useEffect } from 'react'
import { useHistory } from "react-router";
const Routess = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const currentUser = useSelector((State) => State.todoReducer.user)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                if (user) {
                    dispatch(CheckUser("userExists", uid))
                }
            } else {
                dispatch(CheckUser('nouser', 'null'))
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/userinterface' component={UserInterface} />
                <Route exact path='/' component={SignUp} />
                <Route path='/signin' component={SignIn} />
            </Switch>
        </Router>
    )
}

export default Routess;
