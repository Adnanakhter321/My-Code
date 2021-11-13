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
import { AddRestaurants, AddDishes, CheckUser } from "../Actions/Actions";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../screens/Cart";
import SignUpRestaurant from "../screens/SignUpRestaurant";
import SignInRestaurant from "../screens/SignInRestaurant";
import HomeRestaurant from "../screens/HomeRestaurant";
import CheckOrders from "../screens/CheckOrders";
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
        let checkif = true;
        const q1 = query(collection(db, "Users"));
        const q2 = query(collection(db, "restaurantsData"));
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                onSnapshot(q1, (snapshot) => {
                    snapshot.docChanges().forEach((change) => {
                        if (change.type === "added") {
                            if (change.doc.data().uid === uid) {
                                dispatch(CheckUser("userExists", change.doc.data()))
                                checkif = false
                            }
                        }
                    });
                });
                if (checkif === true) {
                    onSnapshot(q2, (snapshot) => {
                        snapshot.docChanges().forEach((change) => {
                            if (change.type === "added") {
                                if (change.doc.data().Email === user.email) {
                                    dispatch(CheckUser("userRestaurant", change.doc.data()))

                                }
                            }
                        });
                    });
                }
            }
            else {
                dispatch(CheckUser('nouser', 'null'))
            }
        });
    }, [dispatch])
    return (
        <Router>
            <Navbar />
            <Switch>
                {currentUser[0] === 'userExists' ?
                    <>
                        <Route exact path='/userinterface' component={UserInterface} />
                        <Route exact path='/dishes/:nameRestaurant' component={Dishes} />
                        <Route exact path='/cart' component={Cart} />
                    </> : currentUser[0] === 'userRestaurant' ?
                        <>
                            <Route exact path='/restauranthome' component={HomeRestaurant} />
                            <Route exact path='/orders' component={CheckOrders} />
                        </>
                        : currentUser[0] === 'nouser' ?
                            <>

                                <Route exact path='/' component={SignUp} />
                                <Route exact path='/restaurantsignup' component={SignUpRestaurant} />
                                <Route exact path='/restaurantlogin' component={SignInRestaurant} />
                                <Route exact path='/signin' component={SignIn} />
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
