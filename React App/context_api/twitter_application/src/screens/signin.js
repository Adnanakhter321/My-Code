import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import { GlobalContext } from '../context/context'

import { auth, signInWithEmailAndPassword,onAuthStateChanged } from '../configs/firebase'
const Signin = () => {
    
    useEffect(() => {
        onAuthStateChanged(auth , (user) =>{
            try{
                if(user){
                    history.push('/home')
                }
            }
            catch(er){
                console.log(er.message);
            }
    })
    })
    

    let history = useHistory();
    let {  dispatch } = useContext(GlobalContext)
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
   

    const Login = async () => {

        if (email !== "" && pass !== "") {
            try {
                await signInWithEmailAndPassword(auth, email, pass)
                let userlogin = {
                    email: email,
                    password: pass
                }
                history.push('./home')
                dispatch({ type: "USER_LOGIN", payload: userlogin })
            }
            catch (er) {
                console.log(er.message);
            }


        }
    }

    return (
        <div className="container my-5" style={{ display: 'flex', justifyContent: 'center', maxWidth: '35rem', flexDirection: "column", height: "55vh", backgroundColor: '#3083fd', color: 'white',borderRadius : '10px'  }}>
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
