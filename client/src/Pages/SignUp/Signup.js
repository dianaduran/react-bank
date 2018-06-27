import React from 'react';
import Modal from 'react-responsive-modal';
import { FormBtn, Input } from "../../components/Form";
import { Container } from "../../components/Grid";

//styles
import "./signup.css";


export default class Signup extends React.Component {
  state = {
    dispModal: false,
  };

  onOpenModal = () => {
    this.setState({ dispModal: true });
  };

  onCloseModal = () => {
    this.setState({ dispModal: false });
  };

  render() {
    const { dispModal } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal} className="btn btn-link registerClass">Register</button>

        <Modal open={dispModal} onClose={this.onCloseModal} center>
          <Container>
            <h4>Register</h4>

            <form>
              <Input
                name="firstName"
                placeholder="First Name (required)"
              />
              <Input
                name="lastName"
                placeholder="Last Name (required)"
              />
              <Input
                name="username"
                placeholder="User Name (required)"
              />
              <Input
                name="phone"
                placeholder="Phone Number (required)"
              />
              <Input
                name="address"
                placeholder="Address (required)"
              />
              <Input
                name="email"
                placeholder="Email (required)"
              />
              <Input
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn

              >
                Continue
              </FormBtn>
            </form>
          </Container>

        </Modal>
      </div>
    );
  }
}


