import React from 'react';

import Typography from 'material-ui/Typography';

export default data => {
  const list = [];
  for (let name in data) {
    if(name !== '_id'){
      list.push({
        name: name,
        content: data[name]
      });
    }
  }
  const listOutput = list.reverse().map(item => {
    return (
      <Typography
        key={item.name}
        variant="body1"
        color="inherit"
        style={{ padding: '0 0 5px 0' }}
      >
        <span style={{ textTransform: 'capitalize' }}>{item.name}</span>:{' '}
        {item.content}
      </Typography>
    );
  });
  return listOutput;
};
