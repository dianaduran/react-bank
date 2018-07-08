import React from 'react';
import PropTypes from 'prop-types';
import AccountOpen from '../components/AccountOpen/AccountOpen';
import DashboardPage from './Dashboard';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import jwt from 'jsonwebtoken';
import config from '../modules/index.json';
import axios from 'axios';

let val;

class AccountOpenPage extends React.Component {

    // set the initial component state
    state = {
      errors: {},
      account:""
  }

   /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   * 
   * 
   */
    processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    //get the id from the local storage
    let userId;
    let local = localStorage.getItem('token');
    jwt.verify(local, config.jwtSecret, (err, decoded) => {
      userId = decoded.sub
    })
    const formData = val;
 console.log(formData);
    // create an AJAX request
// console.log('data', formData);
if(formData==="Checking" || formData==="Saving"){
            axios.post("/auth/accountOpen/"+userId,  formData)
            .then(res => res.data)
            .catch(err => console.log(err));
}
else{
  const xhr = new XMLHttpRequest();
  const errors = xhr.response.errors ? xhr.response.errors : {};
    
      errors.summary = xhr.response.message;
  
      // this.setState({
      //   errors
      // });
}
        
// const xhr = new XMLHttpRequest();
// //console.log(xhr);
// xhr.open('post', '/auth/accountOpen/'+userId);
// xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// xhr.responseType = 'json';
// xhr.addEventListener('load', () => {
//   if (xhr.status === 200) {
//     // success

//     // change the component-container state
//     this.setState({
//       errors: {}
//     });

//     // set a message
//     localStorage.setItem('successMessage', xhr.response.message);

//     // redirect user after sign up to login page
//     this.props.history.push('/dashboard');
//   } else {
//     // failure
//     console.log(xhr.response.errors);
//     const errors = xhr.response.errors ? xhr.response.errors : {};
    
//     errors.summary = xhr.response.message;

//     this.setState({
//       errors
//     });
//   }
// });
// xhr.send(formData);

    

    //return console.log(userId);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */

  handleChange = (account) => {
    this.setState({account});
    val=`selct: ${account.label}`;
    console.log(`selct: ${account.label}`);
  }

  /**
   * Render the component.
   */
  render() {
    const {account}=this.state;
    const value =account && account.value;
    return (
      <Card className="container">
      <form action="/" onSubmit={this.processForm}>
       <h2 className="card-heading">Select Account</h2>

      {this.state.errors.summary && <p className="error-message">{this.state.errors.summary}</p>}

       <Select
        name="Account"
        value={value}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />

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