import React, { Component } from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router,Route,Link, Redirect} from 'react-router-dom';
import "./App.css";

import Logo from "./image/logo.png";
import HomePage from "./components/HomePage/HomePage";
import DashboardPage from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from './Pages/SignUpPage';
import LogoutFunction from './Pages/LogoutFunction';
import Auth from './modules/Auth';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

class App extends Component {

  state = {
    authenticated: false
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
      <div className="App">
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router>
        <div>
          <div className="top-bar">
            <div className="top-bar-left">
              <Link to="/"><img className="logo" alt="logo" src={Logo} /></Link>
            </div>
            {this.state.authenticated ? (
              <div className="top-bar-right">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/logout">Log out</Link>
              </div>
            ) : (
              <div className="top-bar-right">
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
              </div>
            )}

          </div>

          <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
          <PrivateRoute path="/dashboard" component={DashboardPage}/>
          <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
          <LoggedOutRoute path="/signup" component={SignUpPage}/>
          <Route path="/logout" component={LogoutFunction}/>
        </div>

      </Router>
    </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
