import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../context/context';
import { auth, signOut } from '../configs/firebase'

function AnimalAPI() {
    let history = useHistory()
    const { state, dispatch } = useContext(GlobalContext)
    const Logout = () => {
        signOut(auth).then((ev)=>{
            console.log( 'signout done');
            dispatch({ type: "USER_LOGIN"  ,payload : {value:'undef'}})
        }).catch((er)=>{
            console.log(er.message);
        })
    }

    useEffect(() => {
        if (!state.authUser.email || state.authUser.value === "undef") {
            history.push('/signin');
        }
    }, [history, state.authUser])

    return (
        <div className='container my-3' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginLeft: 'auto' }}>
            <button className="btn btn-primary" onClick={Logout}>Logout</button></div>
        <h3>Hello Home</h3>
    </div>
    );
}

export default AnimalAPI;

