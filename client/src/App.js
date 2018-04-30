import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './hoc/layout/Layout';

// Routes
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={BurgerBuilder} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/checkout" component={Checkout} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
