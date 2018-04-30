import React from 'react';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from '../UI/Button';
import Paper from 'material-ui/Paper';
import classNames from 'classnames';

import listOutput from '../output/listOutput';

const styles = theme => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column',
    top: '30%'
  },
  content: {
    width: theme.spacing.unit * 50,
    padding: theme.spacing.unit * 4
  },
  title: {
    marginBottom: '10px'
  },
  button: {
    marginTop: '10px'
  }
});

const ingredients = {
  meat: 1,
  salad: 2,
  cheese: 1,
  bacon: 0
};

const reviewModal = props => {
  const { classes, myProps } = props;
  const className = classNames(classes.root, props.className);
  return (
    <Modal {...myProps} className={className}>
      <Paper className={classes.content}>
        <Typography variant="title" color="inherit" className={classes.title}>
          Confirm Information:
        </Typography>
        {listOutput(ingredients)}
        {listOutput(props.formValues)}
        <Button
          myProps={{
            color: 'primary',
            size: 'large',
            variant: 'raised'
          }}
          className={classes.button}
        >
          Submit
        </Button>
      </Paper>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    formValues: state.form.contactData.values
  };
};

export default connect(mapStateToProps)(withStyles(styles)(reviewModal));
