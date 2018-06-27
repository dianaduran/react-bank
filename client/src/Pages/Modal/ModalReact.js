import React from 'react';
import Modal from 'react-responsive-modal';
import { FormBtn, Input } from "../../components/Form";
import { Container } from "../../components/Grid";

//styles
import "./modal.css";


export default class ModalReact extends React.Component {
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
        <button onClick={this.onOpenModal} className="btn btn-link">Forgot username/password?</button>

        <Modal open={dispModal} onClose={this.onCloseModal} center>
          <Container>
                  <h4>VirtuBank cares about your security. To ensure your information is protected, 
                    we'll need you to enter you email associate to your account and we'll send the temporary code.</h4>
             
              <form>
                <Input
                  name="email"
                  placeholder="Email (required)"
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


