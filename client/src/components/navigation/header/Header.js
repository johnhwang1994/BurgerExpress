import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Button from '../../UI/button/Button';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const rightButtons = (
  <div>
    <Button label="Burger Builder" />
    <Button label="Order" />
    <Button label="Logout" />
  </div>
)

const header = () => {
  return (
    <AppBar
      verticalAlign="middle"
      title={<span style={styles.title}>Burger Express</span>}
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={rightButtons}
    />
  )
}

export default header;