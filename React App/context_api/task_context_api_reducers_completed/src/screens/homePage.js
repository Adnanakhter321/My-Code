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
        if (!state.authUser.email && !state.authUser.password) {
            history.push('/signin');
        }
    }, [history, state.authUser])

    return (
        <div className='container my-5' style={{display:'flex' ,flexDirection:'column', justifyContent:'center' ,alignItems:'center'}}>
            <h3>Hello {state.authUser.userName}</h3>
            <button className="btn btn-primary" onClick={Logout}>Logout</button>
        </div>
    );
}

export default AnimalAPI;

