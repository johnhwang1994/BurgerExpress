import React from 'react';

import Order from '../order/Order';

const checkoutSummary = props => {
  return (
    <div>
      <Order ingredients={props.ingredients} price={props.totalPrice} />
    </div>
  )
}

export default checkoutSummary;