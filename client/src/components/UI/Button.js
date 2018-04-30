import React from 'react';

import Button from 'material-ui/Button';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    textTransform: 'none'
  }
};

const button = props => {
  const {classes, myProps} = props;
  const className = classNames(
    classes.root,
    props.className
  );
  return (
    <Button
      {...myProps}
      disabled={props.disable}
      disableRipple
      className={className}
    >
      {props.children}
    </Button>
  );
};

export default withStyles(styles)(button);
