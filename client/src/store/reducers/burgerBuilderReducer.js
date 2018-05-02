import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  FETCH_INITIAL_DATA_FAILED
} from '../actions/types';

const initialState = {
  ingredients: {
    salad: 0,
    meat: 0,
    cheese: 0,
    bacon: 0
  },
  ingredientPrices: null,
  totalPrice: 4,
  error: false
};

const addIngredient = (state, action) => {
  const newIngredients = { ...state.ingredients };
  let newPrice = state.totalPrice;
  newIngredients[action.ingredientName] += 1;
  newPrice += state.ingredientPrices[action.ingredientName];
  return { ...state, ingredients: newIngredients, totalPrice: newPrice };
};

const removeIngredient = (state, action) => {
  const newIngredients = { ...state.ingredients };
  let newPrice = state.totalPrice;
  newIngredients[action.ingredientName] -= 1;
  newPrice -= state.ingredientPrices[action.ingredientName];
  return { ...state, ingredients: newIngredients, totalPrice: newPrice };
};

const setIngredients = (state, action) => {
  const newIngredients = {
    salad: initialState.ingredients.salad,
    cheese: initialState.ingredients.cheese,
    meat: initialState.ingredients.meat,
    bacon: initialState.ingredients.bacon
  };
  const newPrice = action.intialData.totalPrice;
  const ingredientPrices = {
    salad: action.intialData.salad,
    cheese: action.intialData.cheese,
    meat: action.intialData.meat,
    bacon: action.intialData.bacon
  };
  return {
    ...state,
    ingredients: newIngredients,
    totalPrice: newPrice,
    ingredientPrices: ingredientPrices
  };
};

const fetchInitialDataFailed = (state, action) => {
  return { ...state, error: true };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return addIngredient(state, action);
    case REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case SET_INGREDIENTS:
      return setIngredients(state, action);
    case FETCH_INITIAL_DATA_FAILED:
      return fetchInitialDataFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
