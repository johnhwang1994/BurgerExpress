import React from 'react';

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
          href: '/auth/google',
          color: 'inherit',
          size: 'medium',
        }}
      >
        Login with Google
      </Button>
    ) : (
      <Button
        myProps={{
          href: 'api/logout',
          color: 'inherit',
          size: 'medium',
        }}
      >
        Logout
      </Button>
    )}
  </div>
);

export default navigationItems;
