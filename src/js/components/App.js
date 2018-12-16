import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';

import routes from 'routes';
import MainMenu from 'components/MainMenu/MainMenu';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

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
