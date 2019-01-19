import { createStore, applyMiddleware } from 'redux';

import reducers from 'reducers';
import APIMiddleware from 'middleware/api';
import cartPersistence from 'middleware/cart-persistence';

export default createStore(
  reducers,
  applyMiddleware(APIMiddleware, ...cartPersistence),
);
