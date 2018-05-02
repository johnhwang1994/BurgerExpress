import { FETCH_ORDERS } from '../actions/types';

const intitalState = {
  orders: []
};

const fetchOrders = (state, action) => {
  const orders = action.payload;
  return { ...state, orders: orders };
};

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return fetchOrders(state, action);
    default:
      return state;
  }
};

export default reducer;
