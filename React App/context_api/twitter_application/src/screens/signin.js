import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import { GlobalContext } from '../context/context'


const Signin = () => {

    let history = useHistory();
    let { state, dispatch } = useContext(GlobalContext)
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    useEffect(() => {
        if (state.authUser.email && state.authUser.password) {
            history.push("/home")
        }
    }, [history, state.authUser])

    const Login = () => {
        for (let i = 0; i < state.users.length; i++) {
            const el = state.users[i];
            if (email !== "" && pass !== "") {
                console.log('run');
                if (el.email === email) {
                    if (el.password === pass) {
                        let userlogin = {
                            email: email,
                            password: pass,
                            userName: el.userName,
                            role: el.role,
                        }
                        history.push('./home')
                        dispatch({ type: "USER_LOGIN", payload: userlogin })
                        return;
                    }
                    else {
                        if (i === state.users.length - 1 && state.users[state.users.length - 1].password !== pass) {
                            console.log('Passxword is Wrong');
                        }
                    }
                }
                else {
                    if (i === state.users.length - 1 && state.users[state.users.length - 1].email !== email) {
                        console.log('Email Does Not Exist OR Email Is Wrong');
                        return;
                    }
                }

            }
            else {
                console.log("Some Field is Missing Fill It and Try Again");
                return;
            }

        }
    }
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', maxWidth: '35rem', flexDirection: "column", height: "70vh" }}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
