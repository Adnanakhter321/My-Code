import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { GlobalContext } from '../context/context'



export default function Signup() {
  let history = useHistory()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { state } = useContext(GlobalContext)
  const [Role, setRole] = useState("Student")
  const { dispatch } = useContext(GlobalContext);


  useEffect(() => {
    if (state.authUser.email && state.authUser.password) {
      history.push("/home")
    }
  })

  const Data = () => {
    if (username !== "" && email !== "" && password !== "" && Role !== "") {
      let User = {
        userName: username,
        email: email,
        password: password,
        role: Role
      }
      dispatch({ type: "UPDATE_USER", payload: User });
      history.push('/signin')
    }
    else {
      alert('Some Field is missing..! please fill it and try again')
    }
  }

  return (
    <div className='container  d-flex justify-content-center flex-column my-5 py-5' style={{ maxWidth: '35rem', height: '70vh', backgroundColor : '#3083fd' ,color:'white' }}>
      <h1 className='mb-4'>Sign Up For Twitter</h1>
      <div className="form-group" st>
        <label htmlFor="exampleInputEmail1">Username</label>
        <input type="text" value={username} onChange={(event) => { setUsername(event.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="form-group py-2">
        <label htmlFor="exampleInputPassword1">Email</label>
        <input type="text" value={email} onChange={(event) => { setEmail(event.target.value) }} className="form-control" id="exampleInputEmail" />
        <span id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</span>
      </div>
      <div className="form-group py-2">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} className="form-control" id="exampleInputPassword1" />
      </div>


      <div className="form-group py-2">
        <label htmlFor="exampleInputPassword1">Role</label>
        <div>
          <div>
            <input type="radio" value="Trainer" name="role" id="Trainer" onChange={(ev) => { setRole(ev.target.value); }} /> <label htmlFor="Trainer">Trainer</label>
          </div>

          <div className='py-2'>
            <input type="radio" value="Student" name="role" id="Student" onChange={(ev) => { setRole(ev.target.value); }} /> <label htmlFor="Student">Student</label></div>
        </div>
      </div>
      <button onClick={Data} className="btn btn-primary">SignUp</button>

    </div>
  )
}
