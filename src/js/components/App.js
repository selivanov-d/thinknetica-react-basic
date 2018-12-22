import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import reducers from 'reducers';
import APIMiddleware from 'middleware/api';

import routes from 'routes';
import MainMenu from 'components/MainMenu/MainMenu';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(APIMiddleware)),
);
/* eslint-enable */

const App = () => (
  <Provider store={store}>
    <Router>
      <>
        <MainMenu />

        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </>
    </Router>
  </Provider>
);

export default App;
