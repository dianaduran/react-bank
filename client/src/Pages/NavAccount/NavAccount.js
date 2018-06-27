import React from "react";
import { Link } from "react-router-dom";
import "./navAccount.css";
import person from "../../image/person.png";



const NavAccount = () => (

  <nav className="navbar nav-pills nav-fill">
    <Link to="/" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
      Account
</Link>
    <Link to="/apply" className={window.location.pathname === "/apply" ? "nav-link active" : "nav-link"}>
      Open New Account
</Link>

    <ul className="nav justify-content-end">
      <Link to="/" className={window.location.pathname === "/information" ? "nav-item" : "nav-item"}>
        <img className="person img-fluid" alt="person" src={person} />
      </Link>
    </ul>
  </nav>
)

export default NavAccount;
