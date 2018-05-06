import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';

import Button from '../../UI/Button';

const styles = {
  deskTopOnly: {
    '@media (max-width: 499px)': {
      display: 'none'
    }
  }
};

const navigationItems = props => {
  const {classes} = props;
  return (
    <div className={classes.deskTopOnly}>
      <Button
        myProps={{
          to: '/',
          color: 'inherit',
          size: 'medium',
          component: Link
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
            component: Link
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
  )
}

export default withStyles(styles)(navigationItems);
