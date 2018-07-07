import React from 'react';
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
        selected: [1],
      };
    
      isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
      };
    
      handleRowSelection = (selectedRows) => {
        this.setState({
          selected: selectedRows,
        });
      };

    render() {
        return (
    <div>
        <Paper style={style}>
            <Menu desktop={true}>
                <MenuItem primaryText="Checking" />
                <Divider />
                <MenuItem primaryText="Saving" />
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
          <TableRow selected={this.isSelected(0)}>
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