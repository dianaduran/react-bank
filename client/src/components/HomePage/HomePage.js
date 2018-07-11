import React from 'react';
import { CardText } from 'material-ui/Card';
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
        {/* <CardTitle title="VirtuBank" subtitle="This is the home page." /> */}
        {Auth.isUserAuthenticated() ? (
          <div>
            <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
          </div>
        ) : (
            <Header />
          )}
      </div>
    )
  }
};

export default HomePage;
