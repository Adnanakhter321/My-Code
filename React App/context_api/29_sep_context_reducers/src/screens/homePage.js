import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../context/context';

function AnimalAPI() {
    let history = useHistory()
    const { state , dispatch } = useContext(GlobalContext)
    const Logout = () => {
        dispatch({type : "LOGOUT_USER"})
    }

    useEffect(() => {
        console.log(state.authUser);
        if (!state.authUser.email && !state.authUser.password) {
            history.push('/signin');
        }
    }, [history, state.authUser])

    return (
        <div>
            <h3>Hello Home API</h3>
            <button className="btn btn-primary" onClick={Logout}>Logout</button>
        </div>
    );
}

export default AnimalAPI;

