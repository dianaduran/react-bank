import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui/Card';

import Account from '../Account/Account';

const Dashboard = ({ secretData, user }) => (
  <Card className="container PaperAcc">
    <Account />
    {secretData && <CardText style={{ fontSize: '18px', color: '#002d51' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
