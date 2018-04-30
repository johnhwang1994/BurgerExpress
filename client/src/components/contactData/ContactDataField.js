import React from 'react';

import TextField from 'material-ui/TextField';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit
  }
});

const contactDataField = props => {
  const {
    input,
    name,
    classes,
    propsPack,
    label,
    className,
    meta: { error, touched }
  } = props;
  const myClassName = classNames(classes.root, className);
  return (
    <TextField
      error={Boolean(touched && error)}
      {...input}
      {...propsPack}
      id={name}
      label={label}
      className={myClassName}
      helperText={touched ? error : ''}
    />
  );
};

export default withStyles(styles)(contactDataField);
