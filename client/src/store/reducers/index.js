import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import burgerBuilderReducer from './burgerBuilderReducer';

export default combineReducers({
  auth: authReducer,
  burgerBuilder: burgerBuilderReducer,
  form: reduxForm,
});
