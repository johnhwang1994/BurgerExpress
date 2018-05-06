import React from 'react';

import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';

import listOutput from '../output/listOutput';

const styles = {
  content: {
    marginLeft: '40%',
  }
};

const order = props => {
  const { classes } = props;
  return (
    <Card>
      <CardContent className={classes.content}>
        {listOutput(props.ingredients)}
        {listOutput(props.contactData)}
        <Typography
          variant="body1"
          color="inherit"
          style={{
            marginTop: '10px'
          }}
        >
          Price: USD {props.price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(order);
