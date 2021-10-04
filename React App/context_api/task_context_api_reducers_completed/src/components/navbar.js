import React, { useContext } from "react";
import {
  Link
} from "react-router-dom";
import { GlobalContext } from '../context/context'
function Nav() {
  const { state } = useContext(GlobalContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/homePage">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Animal</Link>
              </li> */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/homePage">Home</Link>
            </li>
            {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/snacks">Snacks</Link>
              </li> */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/signin">SignIn</Link>
            </li>
            {state.authUser.role === "trainer" ? <>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/allstudents">All Students</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/addstudents">Add Students</Link>
              </li>
            </> : null}
            {state.authUser.role === 'Student' ? <>
            <div><li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/mydetails">My Details</Link>
                  </li></div>
            </> : null}
          </ul>
          <div className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success">Search</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
