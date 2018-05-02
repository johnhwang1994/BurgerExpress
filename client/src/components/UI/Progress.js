import React from 'react';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2
  }
});

const prograss = props => {
  const { classes } = props;
  const className = classNames(classes.root, props.className);
  return <CircularProgress className={className} />;
};

export default withStyles(styles)(prograss);
