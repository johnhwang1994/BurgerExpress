import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = {
  list: {
    width: 250
  }
};

const drawer = props => {
  const { classes, myProps } = props;
  const list = (
    <div className={classes.list}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Burger Builder" />
        </ListItem>
        {props.isAuthenticated ? (
          <ListItem button component={Link} to="/orders">
            <ListItemText primary="Orders" />
          </ListItem>
        ) : null}
        {!props.isAuthenticated ? (
          <ListItem button href="/auth/google">
            <ListItemText primary="Login with Google" />
          </ListItem>
        ) : (
          <ListItem button href="/api/logout">
            <ListItemText primary="Logout" />
          </ListItem>
        )}
      </List>
    </div>
  );

  return (
    <Drawer {...myProps}>
      <div
        tabIndex={0}
        role="button"
        onClick={props.toggleDrawer}
        onKeyDown={props.toggleDrawer}
      >
        {list}
      </div>
    </Drawer>
  );
};

export default withStyles(styles)(drawer);
