import axios from 'axios';
import { FETCH_USER, FETCH_ORDERS } from './types';

export const submitOrder = (values, history) => async dispatch => {
  const res = await axios.post('/api/orders', values);
  history.push('/');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchOrders = () => async dispatch => {
  const res = await axios.get('/api/orders');
  dispatch({ type: FETCH_ORDERS, payload: res.data });
};
