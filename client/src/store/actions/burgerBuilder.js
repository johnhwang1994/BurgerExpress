import axios from 'axios';
import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from './types';

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

export const setIngredients = ingredients => {
  return {
    type: SET_INGREDIENTS,
    ingredients: ingredients
  };
};
