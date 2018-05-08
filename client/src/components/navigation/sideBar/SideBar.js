import React from 'react';
import { NavLink } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import { Image, Work, BeachAccess } from '@material-ui/icons';

const styles = theme => ({
  list: {
    width: 250
  },
  menuItem: {
    '&.active': {
      backgroundColor: theme.palette.secondary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
});

const drawer = props => {
  const { classes, myProps } = props;
  const list = (
    <List className={classes.list}>
      <ListItem className={classes.menuItem}>
        <Typography variant="title" color="inherit">
          Burger Express
        </Typography>
      </ListItem>
      <Divider />
      <ListItem component={NavLink} to="/" exact className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <Image />
        </ListItemIcon>
        <ListItemText
          primary="Burger Builder"
          classes={{ primary: classes.primary }}
        />
      </ListItem>
      {props.isAuthenticated ? (
        <ListItem
          component={NavLink}
          to="/orders"
          exact
          className={classes.menuItem}
        >
          <ListItemIcon className={classes.icon}>
            <Work />
          </ListItemIcon>
          <ListItemText
            primary="Orders"
            classes={{ primary: classes.primary }}
          />
        </ListItem>
      ) : null}
      {!props.isAuthenticated ? (
        <ListItem button component="a" href="/auth/google" className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <BeachAccess />
          </ListItemIcon>
          <ListItemText
            primary="Login with Google"
            classes={{ primary: classes.primary }}
          />
        </ListItem>
      ) : (
        <ListItem button component="a" href="/api/logout" className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <BeachAccess />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            classes={{ primary: classes.primary }}
          />
        </ListItem>
      )}
    </List>
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
