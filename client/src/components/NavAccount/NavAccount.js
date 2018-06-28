import React from "react";
import { Link } from "react-router-dom";

//styles and img
import "./navAccount.css";
import person from "../../image/person.png";



const NavAccount = () => (

  <nav className="navbar justify-content-between nav-pills nav-fill NavAccount">
    <Link to="/main/account" className={window.location.pathname === "/main/account" ? "nav-link active" : "nav-link"}>
      <p>Account</p>
    </Link>
    <Link to="/main/kindAccount" className={window.location.pathname === "/main/kindAccount" ? "nav-link active" : "nav-link"}>
      <p>Open New Account</p>
    </Link>
    <ul className="nav ">
      <Link to="/main/information" className={window.location.pathname === "/main/information" ? "nav-item" : "nav-item"}>
        <img className="person img-fluid" alt="person" src={person} />
      </Link>
    </ul>
  </nav>
)

export default NavAccount;
