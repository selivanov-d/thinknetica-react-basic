import { createStore, applyMiddleware, compose } from 'redux';

import reducers from 'reducers';
import APIMiddleware from 'middleware/api';
import cartPersistence from 'middleware/cart-persistence';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(APIMiddleware, ...cartPersistence)),
);
