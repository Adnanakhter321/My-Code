import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import { GlobalContext } from '../context/context'


const Signin = () => {

    let history = useHistory()
    let { state } = useContext(GlobalContext)
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const Login = () => {
        state.users.map((el, keys) => {
            if (email === el.email && pass === el.password) {
                history.push('./homePage')
            }
            else if ((keys+1) === state.users.length  && (el.email !== email || el.password !== pass)) {
                console.log("Email Or Pass Wrong");
            }
            return null;
        })
    }
    return (
        <div className="container">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
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
