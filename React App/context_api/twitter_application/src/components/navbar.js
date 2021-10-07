import React, { useEffect, useState } from "react";
import {
  Link
} from "react-router-dom";
import { auth, onAuthStateChanged } from "../configs/firebase";



function Nav() {
  const [Useer, setUseer] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUseer(user)
      }
      else {
        setUseer(undefined)
      }
    })
  }, [Useer]);


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary bg-gradient">
      <div className="container-fluid ">
        <Link className="navbar-brand text-white" to="/home">Twitter</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            {!Useer ? <>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/signup">SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/signin">SignIn</Link>
              </li>
            </> : Useer ? <>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/home"> HOME </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/mytweets">My Tweets</Link>
              </li>
            </> : null}


          </ul>
          <div className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success bg-dark bg-gradient">Search</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
