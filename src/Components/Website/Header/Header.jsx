import React from 'react'
import { Link , NavLink} from 'react-router-dom'

export default function Header() {

const logOut=()=>{
  window.localStorage.removeItem('email');
  window.localStorage.removeItem('password');
  window.location.reload()
}



  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
    <Link className="text-info navbar-brand" to='/'>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  className="text-info nav-link"  to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="text-info nav-link" to='/about'>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="text-info nav-link" to='/g' >Disabled</NavLink>
        </li>
      </ul>
      <div className="forms">
        {/* {!window.localStorage.getItem('email')? 
          <>
          <Link to='/login' className="btn btn-outline-info">Login</Link>
          <Link to='/register' className="btn btn-info mx-2">Register</Link>
          </>:<Link to='/' className="btn btn-outline-info" onClick={logOut}>Logout</Link>} */}
           <Link to='/login' className="btn btn-outline-info">Login</Link>
          <Link to='/register' className="btn btn-info mx-2">Register</Link>
          <Link to='/dashboard' className="btn btn-info mx-2">dashboard</Link>
          <Link to='/' className="btn btn-outline-info" onClick={logOut}>Logout</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
