import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchOrders } from '../../store/actions';
import Order from '../../components/order/Order';

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  renderOrders() {
    return this.props.orders.reverse().map(order => {
      return (
        <Order
          key={order._id}
          ingredients={order.ingredients}
          price={order.price}
          contactData={order.contactData}
        />
      );
    });
  }

  render() {
    return <div>{this.renderOrders()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders
  };
};

export default connect(mapStateToProps, { fetchOrders })(Orders);
