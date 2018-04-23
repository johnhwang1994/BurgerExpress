import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../navigation/header/Header';
import custonTheme from '../theme/customTheme';

const layout = (props) => {
  return (
    <MuiThemeProvider muiTheme={custonTheme}>
      <Header />
      <main>{props.children}</main>
    </MuiThemeProvider>
  );
};

export default layout;
