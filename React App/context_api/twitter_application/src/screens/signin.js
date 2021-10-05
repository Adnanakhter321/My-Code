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
      if(state.authUser.email && state.authUser.password){
          history.push("/home")
      }
    }, [history, state.authUser])

    const Login = () => {
        state.users.map((el, keys ,allel) => {
            if (email === el.email && pass === el.password) {
                let userlogin = {
                    email: email,
                    password: pass,
                    userName: el.userName,
                    role : el.role,
                }
                history.push('./home')
                // if(el.role === 'trainer'){
                // }
                // else if (el.role === 'student'){
                //     history.push('./home')
                // }
                dispatch({ type: "USER_LOGIN", payload: userlogin })
                return null;
            }
            else if (keys + 1 === state.users.length) {
                let Bac = state.users.length
                if( allel[Bac - 1].email !== email && allel[Bac - 1].password !== pass){
                    console.log("Email Or Pass Wrong");
                }
            }
            return null;
        })
    }
    return (
        <div className="container" style={{display:'flex' , justifyContent: 'center',maxWidth:'35rem', flexDirection:"column" , height: "70vh"}}>
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
