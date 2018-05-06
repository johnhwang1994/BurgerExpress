import React, { Component } from 'react';
// material-ui
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

import Header from '../../components/navigation/header/Header';
import SideBar from '../../components/navigation/sideBar/SideBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: '#757ce8',
      // main: '#3f50b5',
      // dark: '#002884',
      light: '#fff',
      main: '#fff',
      dark: '#757575',
      contrastText: '#000'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#fff'
    }
  }
});

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Header sideBarToggle={this.toggleDrawer('showSideDrawer', true)} user={this.props.user}/>
          <SideBar
            myProps={{
              open: this.state.showSideDrawer,
              onClose: this.toggleDrawer('showSideDrawer', false)
            }}
            toggleDrawer={this.toggleDrawer('showSideDrawer', false)}
            isAuthenticated={this.props.user}
          />
          <main>{this.props.children}</main>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default Layout;
