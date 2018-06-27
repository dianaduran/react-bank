import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Nav from "./components/Nav";
import Footer from "./Pages/Footer";
import Account from "./Pages/Account";

//Styles and Components
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Login} />
          <Route exact path="/account" component={Account} />
          <Footer />
        </div>
        </Router>
       </div>  
       );
  }
}

export default App;
