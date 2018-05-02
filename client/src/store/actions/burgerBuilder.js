import axios from 'axios';
import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INITIAL_DATA_FAILED
} from './types';

export const addIngredient = name => {
  return {
    type: ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = intialData => {
  return {
    type: SET_INGREDIENTS,
    intialData: intialData
  };
};

export const fetchInitialDataFailed = () => {
  return {
    type: FETCH_INITIAL_DATA_FAILED
  };
};

export const intiate = () => {
  return dispatch => {
    axios
      .get('/api/burger/init')
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(err => {
        dispatch(fetchInitialDataFailed());
      });
  };
};
