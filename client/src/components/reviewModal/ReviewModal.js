import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from '../UI/Button';
import Paper from 'material-ui/Paper';
import classNames from 'classnames';

import listOutput from '../output/listOutput';
import { submitOrder } from '../../store/actions';

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

const reviewModal = props => {
  const { classes, myProps, history } = props;
  const className = classNames(classes.root, props.className);
  const order = {
    ingredients: props.ingredients,
    price: props.price,
    contactData: props.formValues
  }
  return (
    <Modal {...myProps} className={className}>
      <Paper className={classes.content}>
        <Typography variant="title" color="inherit" className={classes.title}>
          Confirm Information:
        </Typography>
        {listOutput(props.ingredients)}
        {listOutput(props.formValues)}
        <Button
          myProps={{
            color: 'primary',
            size: 'large',
            variant: 'raised',
            onClick: (() => props.submitOrder(order, history))
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
    formValues: state.form.contactData.values,
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice
  };
};

export default connect(mapStateToProps, { submitOrder })(
  withRouter(withStyles(styles)(reviewModal))
);