import React from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import TextField from 'material-ui/TextField';
import jwt from 'jsonwebtoken';
import config from '../modules/index.json';
import axios from 'axios';


let valueSelect = ''; //store the value selected 
let valueInput = ''; //store value input


class AccountOpenPage extends React.Component {

      // set the initial component state
      state = {
        errors: '',
        account: '',
        balance: 0
      };

  /**
  * Process the form.
  *
  * @param {object} event - the JavaScript event object
  * 
  * 
  */

  processForm=(event)=> {
    
    event.preventDefault();
    const { history } = this.props;
   
    
    let userId; //get the id from the local storage

    let local = localStorage.getItem('token');
    console.log(local);
    jwt.verify(local, config.jwtSecret, (err, decoded) => {
      userId = decoded.sub
    })

    //formdata is a var to add in DB
    const formData = valueSelect + valueInput;
    console.log("form data", formData);

    // create an AJAX request

    if (valueSelect === "account=Checking" || valueSelect === "account=Saving") {
      console.log("form data", formData);
      axios.post("/auth/accountOpen/" + userId, formData)
        .then(res => 
            history.push('/dashboard')//redirect to dashboard page
          )        
        .catch(err => console.log(err));
        
    }
    else if (valueSelect !== "account=Checking" || valueSelect !== "account=Saving") {
     
        this.setState({errors:'Please select an account.', account:'', balance:''});

    }
    
  }



  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  //Handles updating component state when the user types into the select field
  handleChange = (account) => {
    this.setState({ account });
    valueSelect = `account=${account.label}`;
  }

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    valueInput = `&balance=${this.state.balance}`
  };



  /**
   * Render the component.
   */
  render() {
    return (
      <Card className="container">
        <form action="/" onSubmit={this.processForm}>
          <h2 className="card-heading">Select Account</h2>

          <p className="error-message">{this.state.errors}</p>

          <Select
            name="Account"
            value={this.state.account}
            onChange={this.handleChange}
            options={[
              { value: 'checking', label: 'Checking' },
              { value: 'saving', label: 'Saving' },
            ]}
          />

          <div className="field-line">
            <TextField
              floatingLabelText="Start Balance"
              name="balance"
              type="number"
              onChange={this.handleInputChange}
              value={this.state.balance}
            />
          </div>

         <div>
          </div>
            <div className="button-line">
            <RaisedButton type="submit" label="Submit" primary />
           </div>
        </form>
      </Card>
    );
  }

}

AccountOpenPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default AccountOpenPage;