import React from 'react';

import Order from '../order/Order';

const checkoutSummary = () => {
  const ingredients = {
    Meat: 1,
    Salad: 2,
    Cheese: 1,
    Bacon: 0
  };
  return (
    <div>
      <Order ingredients={ingredients} price={20} />
    </div>
  )
}

export default checkoutSummary;