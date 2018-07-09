const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// define the User model schema
const AccountSchema = new Schema({
  account:  String,
  balance: Number   
});

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;