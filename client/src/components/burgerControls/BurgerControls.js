import React from 'react';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Button from '../UI/Button';

import Control from './Control';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const styles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column',
    padding: '20px'
  },
  price: {
    marginBottom: '10px'
  }
};

const burgerControls = props => {
  const { classes } = props;
  let button = null;
  button = props.isAuthenticated ? (
    <Button
      myProps={{
        onClick: props.click,
        size: 'large',
        variant: 'raised',
        color: 'inherit',
        disabled: Boolean(props.noPurchasable)
      }}
    >
      Order Now!
    </Button>
  ) : (
    <Button
      myProps={{
        href: '/auth/google',
        size: 'large',
        variant: 'raised',
        color: 'inherit'
      }}
    >
      Login with Google
    </Button>
  );
  return (
    <Paper className={classes.root}>
      <Typography variant="title" color="inherit" className={classes.price}>
        Current Price: {props.totalPrice.toFixed(2)}
      </Typography>
      <form>
        {controls.map(ctrl => (
          <Control
            key={ctrl.label}
            label={ctrl.label}
            onAddIngredient={() => props.onAddIngredient(ctrl.type)}
            onRemoveIngredient={() => props.onRemoveIngredient(ctrl.type)}
            disable={props.ingredients[ctrl.type] <= 0}
          />
        ))}
      </form>
      {button}
    </Paper>
  );
};

export default withStyles(styles)(burgerControls);
