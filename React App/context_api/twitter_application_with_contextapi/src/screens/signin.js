import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useHistory, useLocation } from 'react-router'
import { GlobalContext } from '../context/context'
import { auth, signInWithEmailAndPassword } from '../configs/firebase'

const Signin = () => {

    let location = useLocation()
    let history = useHistory();
    let { state, dispatch } = useContext(GlobalContext)
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    useEffect(() => {
        if (state.authUser.email && location.pathname === '/signin') {
            history.goBack();
        }
    }, [history,location,  state.authUser])

    const Login = () => {
        if (email !== "" && pass !== "") {
            signInWithEmailAndPassword(auth, email, pass).then((ev) => {
                history.push('./home')
                console.log(ev.user.email);
                dispatch({ type: "USER_LOGIN", payload: ev.user })
            }).catch((er) => { console.log(er.message); })

        }
    }
    return (
        <div className="container my-5" style={{ display: 'flex', justifyContent: 'center',position:'relative' ,top:'4.5rem', maxWidth: '35rem', flexDirection: "column", height: "24rem", backgroundColor: '#3083fd', color: 'white', borderRadius: '10px' }}>
            <h1 className='mb-4'>Sign In For Twitter</h1>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} />

                <small id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group py-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                    value={pass} onChange={(ev) => { setPass(ev.target.value) }}
                />
            </div>
            <button onClick={Login} className="btn btn-primary">Login</button>
        </div>
    )
}

export default Signin

