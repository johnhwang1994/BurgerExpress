import { FETCH_USER } from '../actions/types';

const initialState = {
  user: null
};

const fetchUser = (state, action) => {
  const user = action.payload;
  return { ...state, user: user };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return fetchUser(state, action);
    default:
      return state;
  }
};

export default reducer;
