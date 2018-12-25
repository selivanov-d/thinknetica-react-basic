import React from 'react';
import { Router, Switch, matchPath } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import reducers from 'reducers';
import APIMiddleware from 'middleware/api';
import prepareData from 'helpers/prepare-data';

import routes from 'routes';
import MainMenu from 'components/MainMenu/MainMenu';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(APIMiddleware)),
);
/* eslint-enable */

const history = createBrowserHistory();

function historyCb(location) {
  const state = { params: {}, query: {}, routes: [] };

  routes.some((route) => {
    const match = matchPath(location.pathname, route);

    if (match) {
      state.location = location;
      state.routes.push(route);
      state.params = match.params;
    }

    return match;
  });

  prepareData(store, state);
}

history.listen(historyCb);

historyCb(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
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
