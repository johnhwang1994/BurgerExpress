import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENT
} from '../actions/types';

const initialState = {
  ingredients: {
    salad: 2,
    meat: 1,
    cheese: 2,
    bacon: 1
  },
  totalPrice: 4
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const addIngredient = (state, action) => {
  const newIngredients = { ...state.ingredients };
  let newPrice = state.totalPrice;
  newIngredients[action.ingredientName] += 1;
  newPrice += INGREDIENT_PRICES[action.ingredientName];
  return { ingredients: newIngredients, totalPrice: newPrice };
};

const removeIngredient = (state, action) => {
  const newIngredients = { ...state.ingredients };
  let newPrice = state.totalPrice;
  newIngredients[action.ingredientName] -= 1;
  newPrice -= INGREDIENT_PRICES[action.ingredientName];
  return { ingredients: newIngredients, totalPrice: newPrice };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return addIngredient(state, action);
    case REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    default:
      return state;
  }
};

export default reducer;
