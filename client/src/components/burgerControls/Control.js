import React from 'react';
// material-ui
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Button from '../UI/Button';

const styles = theme => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    paddingBottom: '10px'
  },
  label: {
    display: 'inline-block',
    width: '80px'
  },
  button: {
    display: 'inline-block',
    cursor: 'pointer',
    margin: theme.spacing.unit
  }
});

const control = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="title" color="inherit" className={classes.label}>
        {props.label}
      </Typography>
      <Button
        myProps={{
          onClick: props.onRemoveIngredient,
          variant: 'raised',
          color: 'primary',
          disabled: props.disable
        }}
        className={classes.button}
      >
        Less
      </Button>
      <Button
        myProps={{
          onClick: props.onAddIngredient,
          variant: 'raised',
          color: 'secondary'
        }}
        className={classes.button}
      >
        More
      </Button>
    </div>
  );
};

export default withStyles(styles)(control);
