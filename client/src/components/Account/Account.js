import React from 'react';
import jwt from 'jsonwebtoken';
import config from '../../modules/index.json';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
};

class Account extends React.Component {

    state = {
       savingList:[],
       checkingList:[],
       accounts:[]
      };
    
      isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
      };
    
      handleRowSelection = (selectedRows) => {
        this.setState({
          selected: selectedRows,
        });
      };

      componentDidMount(){
       let userId; //get the id from the local storage

        let local = localStorage.getItem('token');
       
        jwt.verify(local, config.jwtSecret, (err, decoded) => {
          userId = decoded.sub
        })

        console.log(userId);
        
        axios.get("/auth/getAccount/" + userId)
        .then(res => 
          this.setState({accounts:res.data.account}) 
         
          
          // accounts.push(res.data.account),
        //  console.log(accounts.filter(acc=>acc.account.startsWith("C"))),
         )        
        .catch(err => console.log(err));
      };

      GetChecking=(event)=>{
          event.preventDefault();
          // this.setState({checkingList:this.state.accounts.filter(acc=>acc.account.startsWith("C"))})
          console.log(this.state.accounts.filter(acc=>acc.account.startsWith("C")))
      }

      GetSaving=(event)=>{
        event.preventDefault();
        // this.setState({savingList:this.state.accounts.filter(acc=>acc.account.startsWith("S"))})
        console.log(this.state.accounts.filter(acc=>acc.account.startsWith("S")))
      }


     

    render() {
        return (
    <div>
        <Paper style={style}>
            <Menu desktop={true}>
                <MenuItem primaryText="Checking" onClick={this.GetChecking} />
                <Divider />
                <MenuItem primaryText="Saving" onClick={this.GetSaving} />
            </Menu>
        </Paper>
        <Paper style={style}>
        <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Credit</TableHeaderColumn>
            <TableHeaderColumn>Debit</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow >
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
         
        </TableBody>
      </Table>
        </Paper>
    </div>
)};
}

export default Account;