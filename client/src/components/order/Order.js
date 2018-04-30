import React from 'react';

import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';

import listOutput from '../output/listOutput';

const styles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column'
  }
};

const order = props => {
  const { classes } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        {listOutput(props.ingredients)}
        <Typography
          variant="body1"
          color="inherit"
          style={{
            marginTop: '10px'
          }}
        >
          Price: USD {props.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(order);
