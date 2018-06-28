import React, { Component } from "react";
import { Container, Col, Row } from "../../components/Grid";

//img and styles
import "./kindAccount.css";
import checking from "../../image/checking2.png";
import saving from "../../image/saving2.png";
import loan from "../../image/loan2.png";

class KindAccount extends Component {
  render() {
    return (
      <div className="KindAccount">
        <Container>
          <Row>
            <Col size="md-4">
              <a>
                <img className="KindAccountImg" alt="checking" src={checking} />
                <p className="PKingAccount">Checking Account</p>
              </a>
            </Col>
            <Col size="md-4">
              <a>
                <img className="KindAccountImg" alt="saving" src={saving} />
                <p>Saving Account</p>
              </a>
            </Col>
            <Col size="md-4">
              <a>
                <img className="KindAccountImg" alt="loan" src={loan} />
                <p>Loan</p>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default KindAccount;
