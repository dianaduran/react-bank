import React, { Component } from "react";
import { Container, Col, Row } from "../../components/Grid";
import { FormBtn, Input } from "../../components/Form";
import Checkbox from 'react-bootstrap/lib/Checkbox';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Modal from '../Modal';

//styles and img
import "./login.css";
import Img from "../../image/banking_one.png";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Container fluid>
          <Row>
            <Col size="md-8">
              <img className="img-fluid" alt="img" src={Img} />
            </Col>
            <Col size="md-4">
              <div className="DivForm">
                <h2>Welcome back</h2>
                <hr></hr>
                <form>
                  <Input
                    name="userName"
                    placeholder="User Name (required)"
                  />
                  <Input
                    name="password"
                    placeholder="Password (required)"
                  />
                  <FormGroup>
                    <Col size="sm-10">
                      <Checkbox>Remember me</Checkbox>
                    </Col>
                  </FormGroup>
                  <div className="text-center">
                    <FormBtn >
                      Sign in
                  </FormBtn>
                  </div>
                </form>
                <div className="text-center">
                  <Modal />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Login;
