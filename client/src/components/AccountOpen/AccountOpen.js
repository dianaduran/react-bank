import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



const AccountOpen = ({
  onSubmit,
  onChange,
  errors,
  val
  
}) => (
    <Card className="container">
       <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">Select Account</h2>

       {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div>
          <SelectField
            floatingLabelText="Account"
            name="account"
            value={val}
            onChange={onChange}
            errorText={errors.account}
            >
            <MenuItem value={null} primaryText="" />
            <MenuItem value={val.saving} primaryText="Saving" />
            <MenuItem value={val.checking} primaryText="Checking" />
          </SelectField>
        </div>

        <div className="button-line">
          <RaisedButton type="submit" label="Submit" primary />
        </div>


      </form>
    </Card>
  );

AccountOpen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  // successMessage: PropTypes.string.isRequired,
  val: PropTypes.object.isRequired
};

export default AccountOpen;
