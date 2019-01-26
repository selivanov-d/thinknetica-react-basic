import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from 'reducers/cart';
import catalog from 'reducers/catalog';

export default combineReducers({
  cart,
  catalog,
  form: formReducer,
});
