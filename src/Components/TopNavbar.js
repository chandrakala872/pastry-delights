import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../Components/Images/logo2.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function TopNavbar() {
  return (
     <div className='sticky-top '>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  <a className="navbar-brand text-white " href="#">Pastry Delights</a>
  <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
  <h1> <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={Logo} alt="logo" />
                </h1>


    <ul className="navbar-nav  ml-auto row justify-content-between">
      <li className="nav-item active">
    
      <Link to="/" className='nav-link text-white ' >Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/Aboutus" className='nav-link text-white'>About</Link>
      </li>
      <li className="nav-item">
      <Link to="/Contactus" className='nav-link text-white '>Contact</Link>
      </li>
      <li className="nav-item">
      <Link to="/Login" className='nav-link text-white '>Login</Link>
      </li>
      <li className="nav-item">
      {/* <Link to="/Register" className='nav-link text-white '>Register</Link> */}
      </li>
      <li className="nav-item">
      <Link to="/Login" className='nav-link text-white '>Logout</Link>
      </li>
       
      


      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
    </ul>
    <div>
            {/* <FontAwesomeIcon icon={faShoppingCart} color="white"  /> */}
        </div>
  </div>
</nav>
    </div>
  )
}

export default TopNavbar


    