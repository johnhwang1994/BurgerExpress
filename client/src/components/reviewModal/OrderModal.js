import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
  buttons: {
    marginTop: '10px'
  }
});

const reviewModal = props => {
  const { classes, myProps } = props;
  const className = classNames(classes.root, props.className);
  return (
    <Modal {...myProps} className={className}>
      <Paper className={classes.content}>
        <Typography variant="title" color="inherit" className={classes.title}>
          Confirm Order Information:
        </Typography>
        {listOutput(props.ingredients)}
        <Typography
          variant="subheading"
          color="inherit"
          style={{
            marginTop: '10px'
          }}
        >
          Price: USD {props.price.toFixed(2)}
        </Typography>
        <div className={classes.buttons}>
          <Button
            myProps={{
              color: 'secondary',
              size: 'large',
              variant: 'raised',
              onClick: props.close,
              style: { float: 'left' }
            }}
          >
            Cancel
          </Button>
          <Button
            myProps={{
              component: Link,
              to: '/checkout',
              color: 'primary',
              size: 'large',
              variant: 'raised',
              style: { float: 'right' }
            }}
          >
            Continue
          </Button>
        </div>
      </Paper>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice
  };
};

export default connect(mapStateToProps)(
  withStyles(styles)(reviewModal)
);
