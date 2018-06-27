import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "../../components/Grid";
import { FormBtn, Input } from "../../components/Form";
import Checkbox from 'react-bootstrap/lib/Checkbox';
import FormGroup from 'react-bootstrap/lib/FormGroup';

//pages associate to account
import person from "../../image/person.png";


//styles and img
import "./account.css";


class Account extends Component {
  render() {
    return (
      <div className="Account">

      {/* nav to navigate into your account */}
        <nav className="navbar justify-content-between nav-pills nav-fill">
          <Link to="/account" className={window.location.pathname === "/account" ? "nav-link" : "nav-link"}>
            <p>Account</p>
          </Link>
          <Link to="/account/apply" className={window.location.pathname === "/account/apply" ? "nav-link" : "nav-link"}>
            <p>Open New Account</p>
          </Link>

          <ul className="nav ">
            <Link to="/account/information" className={window.location.pathname === "/account/information" ? "nav-item" : "nav-item"}>
              <img className="person img-fluid" alt="person" src={person} />
            </Link>
          </ul>
        </nav>
        <Container fluid>
          <Row>
            <Col size="md-4">

            </Col>
            <Col size="md-8">
              <div className="DivForm">



              </div>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Account;
