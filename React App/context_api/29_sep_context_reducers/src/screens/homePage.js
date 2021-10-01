import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../context/context'

function AnimalAPI() {
    let history = useHistory()
    const {state} = useContext(GlobalContext)
    const Logout = ()=>{
        state.authUser = {}
        return{
            ...state,
            authUser : state.authUser,
        }
        
    }
    useEffect(() => {
        console.log(state.authUser);
        if(state.authUser.email=== {}){
            history.push('/signin')
        }
    })


    return (
        <div>
            <h3>Hello Home API</h3>
            <button className="btn btn-primary" onClick={Logout}>Logout</button>
        </div>
    );
}

export default AnimalAPI;

