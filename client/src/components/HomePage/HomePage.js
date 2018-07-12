import React from 'react';
import Auth from '../../modules/Auth';
import "./homepage.css";
import Header from "../Header/Header";


class HomePage extends React.Component {


  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <div className="container">
         {Auth.isUserAuthenticated() ? (
          <div>
            {/* <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You to VirtuBank.</CardText> */}
            <Header />
          </div>
        ) : (
            <Header />
          )}
      </div>
    )
  }
};

export default HomePage;
