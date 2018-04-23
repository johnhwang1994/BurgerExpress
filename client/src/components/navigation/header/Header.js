import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const buttonStyle = {
  color: 'white',
}

const rightButtons = (
  <div>
    <FlatButton label="Burger Builder" style={buttonStyle}/>
    <FlatButton label="Order" style={buttonStyle}/>
    <FlatButton label="Logout" style={buttonStyle}/>
  </div>
)

const header = () => {
  return (
    <AppBar
      title={<span style={styles.title}>Burger Express</span>}
      onTitleClick={handleClick}
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={rightButtons}
    />
  )
}

export default header;