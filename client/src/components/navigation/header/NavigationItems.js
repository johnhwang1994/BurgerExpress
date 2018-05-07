import React from 'react';
import { NavLink } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';

import Button from '../../UI/Button';

const styles = theme => ({
  deskTopOnly: {
    '@media (max-width: 499px)': {
      display: 'none'
    }
  },
  selected: {
    color: theme.palette.secondary.main
  }
});

const navigationItems = props => {
  const { classes } = props;
  return (
    <div className={classes.deskTopOnly}>
      <Button
        myProps={{
          to: '/',
          color: 'inherit',
          size: 'medium',
          component: NavLink,
          exact: true,
          activeClassName: classes.selected
        }}
      >
        Burger Builder
      </Button>
      {props.isAuthenticated ? (
        <Button
          myProps={{
            to: '/orders',
            color: 'inherit',
            size: 'medium',
            component: NavLink,
            exact: true,
            activeClassName: classes.selected
          }}
        >
          Orders
        </Button>
      ) : null}
      {!props.isAuthenticated ? (
        <Button
          myProps={{
            href: '/auth/google',
            color: 'inherit',
            size: 'medium'
          }}
        >
          Login with Google
        </Button>
      ) : (
        <Button
          myProps={{
            href: 'api/logout',
            color: 'inherit',
            size: 'medium'
          }}
        >
          Logout
        </Button>
      )}
    </div>
  );
};

export default withStyles(styles)(navigationItems);
