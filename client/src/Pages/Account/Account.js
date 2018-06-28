import React, { Component } from "react";
import { Container, Col, Row } from "../../components/Grid";
import { FormBtn, Input } from "../../components/Form";
import Checkbox from 'react-bootstrap/lib/Checkbox';
import FormGroup from 'react-bootstrap/lib/FormGroup';


//styles and img
import "./account.css";
import checking from "../../image/checking2.png";
import saving from "../../image/saving2.png";
import loan from "../../image/loan2.png";

class Account extends Component {
  render() {
    return (
      <div>
      <div className="Account">
        <Container fluid>
          <Row>
            <Col size="md-4">
                list account
            </Col>
            <Col size="md-8">
              <div className="DivForm">
                  list transaction by account

              </div>
            </Col>
          </Row>
        </Container>
      </div>


<div className="KindAccount">
        <Container>
          <Row>
            <Col size="md-4">
              <a className="ImgP">
                <img className="KindAccountImg" alt="checking" src={checking} />
                <p className="PKingAccount">Checking Account</p>
              </a>
            </Col>
            <Col size="md-4">
              <a className="ImgP">
                <img className="KindAccountImg" alt="saving" src={saving} />
                <p>Saving Account</p>
              </a>
            </Col>
            <Col size="md-4">
              <a className="ImgP">
                <img className="KindAccountImg" alt="loan" src={loan} />
                <p>Loan</p>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      </div>
    );
  }
}

export default Account;
