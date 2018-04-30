import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import formFields from './formFields';
import ContactDataField from './ContactDataField';
import Button from '../UI/Button';
import validateEmail from '../../utils/validateEmail';

const styles = {
  root: {
    padding: '20px'
  },
  form: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column'
  },
  formContent: {
    width: '300px'
  },
  fields: {
    paddingRight: '10px'
  },
  buttons: {
    marginTop: '20px'
  }
};

class ContactData extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={ContactDataField}
          type="text"
          label={label}
          name={name}
          propsPack={{ fullWidth: true }}
        />
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <form
          onSubmit={this.props.handleSubmit(this.props.onClick)}
          className={classes.form}
        >
          <div className={classes.formContent}>
            <div className={classes.fields}>{this.renderFields()}</div>
            <div className={classes.buttons}>
              <Button
                myProps={{
                  component: Link,
                  to: '/',
                  size: 'large',
                  color: 'secondary',
                  variant: 'raised',
                  style: { float: 'left' }
                }}
              >
                Cancel
              </Button>
              <Button
                myProps={{
                  type: 'submit',
                  size: 'large',
                  color: 'primary',
                  variant: 'raised',
                  style: { float: 'right' }
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </form>
      </Paper>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.email = validateEmail(values.email || '');
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You need to provide a value';
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: 'contactData',
  destroyOnUnmount: false
})(withStyles(styles)(ContactData));
