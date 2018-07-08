import React from 'react';
import PropTypes from 'prop-types';
import AccountOpen from '../components/AccountOpen/AccountOpen';
import DashboardPage from './Dashboard';
import jwt from 'jsonwebtoken';
import config from '../modules/index.json';
import axios from 'axios';


class AccountOpenPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      errors: {},
      account: {
        checking: '',
        saving: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeAccount = this.changeAccount.bind(this);
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
    const account = encodeURIComponent(this.state.account);
    const formData = `account=${account}`;
 console.log(formData);
    // create an AJAX request
// console.log('data', formData);
            axios.post("/auth/accountOpen/"+userId,  formData)
            .then(res => res.data)
            .catch(err => console.log(err));
        
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
  changeAccount(event) {
     const field = event.target.name;
     const account = this.state.account;
     account[field] = event.target.value;

    // this.setState({account});
    this.setState({
      account
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <AccountOpen
        onSubmit={this.processForm}
        onChange={this.changeAccount}
        errors={this.state.errors}
        account={this.state.account}
      />
    );
  }

}

AccountOpenPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default AccountOpenPage;