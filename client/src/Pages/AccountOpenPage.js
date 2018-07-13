import React from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import jwt from 'jsonwebtoken';
import config from '../modules/index.json';
import axios from 'axios';


let valueSelect = ''; //store the value selected 
let valueInput = ''; //store value input

const style = {
  margin: '56px 0px 56px 0',
  display: 'inherit'
}

const accStyle = {
  padding: '20px'
}

class AccountOpenPage extends React.Component {

  // set the initial component state
  state = {
    errors: '',
    account: '',
    balance: 0,
    bankName:'',
    bankRoute:'',
    bankAccount:''
  };

  /**
  * Process the form.
  *
  * @param {object} event - the JavaScript event object
  * 
  * 
  */

  processForm = (event) => {

    event.preventDefault();
    const { history } = this.props;

    this.setState({errors:''});
    let userId; //get the id from the local storage

    let local = localStorage.getItem('token');
    jwt.verify(local, config.jwtSecret, (err, decoded) => {
      userId = decoded.sub
    })

    //formdata is a var to add in DB
    const formData = valueSelect + valueInput;
  

    // create an AJAX request
 
    if (valueSelect === "account=Checking" || valueSelect === "account=Saving")
   { 
      if(this.state.bankName!=="" && this.state.bankRoute!=="" && this.state.bankAccount!=="") {
        // console.log("form data", formData);
        axios.post("/auth/accountOpen/" + userId, formData)
          .then(res =>
              history.push('/dashboard')//redirect to dashboard page
          )
          .catch(err => console.log(err));
      }
      else{
        this.setState({ errors: 'Please complete the form to create a new account!', account:'', bankName:'', bankAccount:'', bankRoute:''});
        valueSelect="";
      }
  }

   if (valueSelect !== "account=Checking" || valueSelect !== "account=Saving") {

       return this.setState({ errors: 'Please complete the form to create a new account!', bankName:'', bankAccount:'', bankRoute:''});

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
      <div style={accStyle}>
        <Paper style={style} zDepth={5} className="PaperOpen" >
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
                  floatingLabelText="Bank name"
                  name="bankName"
                  onChange={this.handleInputChange}
                  value={this.state.bankName}
                />
              </div>

              <div className="field-line">
                <TextField
                  floatingLabelText="Bank Route"
                  name="bankRoute"
                  onChange={this.handleInputChange}
                  type="number"
                  value={this.state.bankRoute}
                />
              </div>

              <div className="field-line">
                <TextField
                  floatingLabelText="Account Number"
                  name="bankAccount"
                  type="number"
                  onChange={this.handleInputChange}
                  value={this.state.bankAccount}
                />
              </div>

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
         </Paper>
      </div>
    );
  }

}

AccountOpenPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default AccountOpenPage;