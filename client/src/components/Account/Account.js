import React from 'react';
import jwt from 'jsonwebtoken';
import config from '../../modules/index.json';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import "./account.css";

const style = {
  margin: '16px 0px 16px 0',
  display: 'inherit',
  
 }

const accStyle={
  padding:'80px',
 }

class Account extends React.Component {

  state = {
    savingList: [],
    checkingList: [],
    accounts: []
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  componentDidMount() {
    let userId; //get the id from the local storage

    let local = localStorage.getItem('token');

    jwt.verify(local, config.jwtSecret, (err, decoded) => {
      userId = decoded.sub
    })

    //console.log('userID',userId);

    axios.get("/auth/getAccount/" + userId)
      .then(res =>
        this.setState({ accounts: res.data.account }),
        )
      .catch(err => console.log(err));
  };

  //filter in the checking list the accounts type checking
  GetChecking = (event) => {
    event.preventDefault();
    this.setState({ checkingList: this.state.accounts.filter(acc => acc.account.startsWith("C")) })
    // console.log(this.state.accounts.filter(acc => acc.account.startsWith("C")))
  }

  //filter in the saving list the accounts type saving
  GetSaving = (event) => {
    event.preventDefault();
    this.setState({ savingList: this.state.accounts.filter(acc => acc.account.startsWith("S")) })
    // console.log(this.state.accounts.filter(acc => acc.account.startsWith("S")))
  }

  render() {
    return (
      <div style={accStyle}>
         <Paper style={style} zDepth={5}>
          <List>
            
            <ListItem
              primaryText="Checking"
              onClick={this.GetChecking}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={
                this.state.checkingList.length ? (
                this.state.checkingList.map(check => {
                  return (
                <ListItem
                  key={check._id}
                  primaryText={`Balance... ${check.balance}`}
                  leftIcon={<ActionGrade />}
                />
                  );
                })
              ) : ([
                <ListItem
                key={1}
                primaryText="No checking account yet!!"
                leftIcon={<ActionGrade />}
              />
              ])
              }
              
            />
          </List>
          </Paper>

          <Divider />
          <Divider />


          <Paper style={style} zDepth={5}>
          <List>
            <ListItem
              primaryText="Saving"
              onClick={this.GetSaving}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={
                this.state.savingList.length ? (
                this.state.savingList.map(sav => {
                  return (
                <ListItem
                  key={sav._id}
                  primaryText={`Balance... ${sav.balance}`}
                  leftIcon={<ActionGrade />}
                />
                  );
                })
              ) : ([
                <ListItem
                key={1}
                primaryText="No saving account yet!!"
                leftIcon={<ActionGrade />}
              />
              ])
              }
            />
          </List>
          </Paper>
      </div>
    )
  };
}

export default Account;