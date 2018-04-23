import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const buttonStyle = {
  color: 'white',
}

const button = (props) => {
  return (
    <FlatButton label={props.label} secondary={true} style={buttonStyle}/>
  )
}

export default button;