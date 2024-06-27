// store.js
import { createStore } from 'redux';

const initialState = {
  loader: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADER':
        return { ...state, loader: !state.loader };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
