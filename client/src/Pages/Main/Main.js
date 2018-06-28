import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavAccount from "../../components/NavAccount";
import Account from "../Account";
import KindAccount from "../KindAccount";
//styles and img
import "./main.css";


class Main extends Component {
  render() {
    return (
      <div className="Main">
      <Router>
        <div>
          <NavAccount />
          <Route exact path="/main/account" component={Account} />
          <Route exact path="/main/kindAccount" component={KindAccount} />
        </div>
        </Router>
       </div>  
       );
  }
}

export default Main;
