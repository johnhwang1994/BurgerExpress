import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import { Image, Work, BeachAccess } from '@material-ui/icons';

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
        <ListItem>
          <Typography variant="title" color="inherit">
            Burger Express
          </Typography>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Image />
          </ListItemIcon>
          <ListItemText primary="Burger Builder" />
        </ListItem>
        {props.isAuthenticated ? (
          <ListItem button component={Link} to="/orders">
            <ListItemIcon>
              <Work />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        ) : null}
        {!props.isAuthenticated ? (
          <ListItem button href="/auth/google">
            <ListItemIcon>
              <BeachAccess />
            </ListItemIcon>
            <ListItemText primary="Login with Google" />
          </ListItem>
        ) : (
          <ListItem button href="/api/logout">
            <ListItemIcon>
              <BeachAccess />
            </ListItemIcon>
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
