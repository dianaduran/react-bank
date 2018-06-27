import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../image/logo.png"; 
import Signup from "../../Pages/SignUp";


const Nav = () => (

<nav className="navbar justify-content-between nav-pills nav-fill">
<Link to="/" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
       <img className="logo img-fluid" alt="logo" src={logo}/>
</Link>
<Link to="/account" className={window.location.pathname === "/account" ? "nav-link" : "nav-link"}>
       
</Link>

<ul className="nav justify-content-end">
  <Link to="/" className={window.location.pathname === "/signup" ? "nav-item" : "nav-item"}>
         <Signup />
    </Link>
</ul>

</nav>
  )

export default Nav;
