import React from 'react';
// material-ui
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// customized components
import NavigationItems from './NavigationItems';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: '10px'
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Burger Express
          </Typography>
          <NavigationItems isAuthenticated={true}/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(header);