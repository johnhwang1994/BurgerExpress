import axios from 'axios';
import {
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_START,
  PURCHASE_BURGER_FAILED
} from './types';

export const purchaseBurgerSuccess = () => {
  return {
    type: PURCHASE_BURGER_SUCCESS
  };
};
