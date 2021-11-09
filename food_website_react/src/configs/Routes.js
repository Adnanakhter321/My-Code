import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import UserInterface from "../screens/UserInterface";
import Navbar from '../components/Navbar';
import { auth, onAuthStateChanged } from "../configs/Firebase";
import { useEffect } from 'react'
import ReactBones from "../screens/ReactBones";
import Dishes from "../screens/Dishes";
import { db, collection, query, onSnapshot } from "../configs/Firebase";
import { AddRestaurants, AddDishes , CheckUser } from "../Actions/Actions";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../screens/Cart";
const Routess = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((State) => State.todoReducer.user)
    const q = query(collection(db, "restaurantsData"));
    useEffect(() => {
        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    dispatch(AddRestaurants(change.doc.data()))
                }
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const q2 = query(collection(db, "restuarantDishes"));
    useEffect(() => {
        onSnapshot(q2, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    dispatch(AddDishes(change.doc.data()))
                }
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                {currentUser[0] === 'userExists' ?
                    <>
                        <Route path='/userinterface' component={UserInterface} />
                        <Route path='/dishes/:nameRestaurant' component={Dishes} />
                        <Route path='/cart' component={Cart} />
                    </> : currentUser[0] === 'nouser' ?
                        <>
                            <Route exact path='/' component={SignUp} />
                            <Route path='/signin' component={SignIn} />
                        </> :
                        <>
                            <Route path='/' component={ReactBones} />
                        </>
                };
            </Switch>
        </Router>
    )
}

export default Routess;
