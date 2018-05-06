import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/layout/Layout';

import { fetchUser } from './store/actions';
// Routes
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout user={this.props.user}>
          <Route exact path="/" component={BurgerBuilder} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/checkout" component={Checkout} />
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { fetchUser })(App);
