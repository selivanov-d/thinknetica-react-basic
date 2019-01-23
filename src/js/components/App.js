import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';

import routes from 'routes';
import store from 'root/store';
import history from 'root/history';

import MainMenu from 'components/MainMenu/MainMenu';

const App = () => (
  <>
    <Helmet
      defaultTitle="Thinknetica React Basic"
      titleTemplate="%s | Thinknetica React Basic"
    />
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
  </>
);

export default App;
