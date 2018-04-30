import React from 'react';
// material-ui
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';

const navigationItems = props => (
  <div>
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
          to: '/login',
          color: 'inherit',
          size: 'medium',
          component: Link
        }}
      >
        Login
      </Button>
    ) : (
      <Button
        myProps={{
          to: '/logout',
          color: 'inherit',
          size: 'medium',
          component: Link
        }}
      >
        Logout
      </Button>
    )}
  </div>
);

export default navigationItems;
