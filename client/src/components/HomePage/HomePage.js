import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import Auth from '../../modules/Auth';

import Imgen from '../../image/Couple-banking-AdobeStock_125640641.jpeg';


class HomePage extends React.Component {


  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Card className="container">
        {/* <CardTitle title="VirtuBank" subtitle="This is the home page." /> */}
        {Auth.isUserAuthenticated() ? (
          <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
        ) : (
          <img className="logo" alt="Img" src={Imgen} />
          )}
      </Card>
    )
  }
};

export default HomePage;
