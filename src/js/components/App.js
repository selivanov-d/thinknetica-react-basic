import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from 'routes';
import CartContainer from 'components/CartWidget/CartContainer';
import MainMenu from 'components/MainMenu/MainMenu';

const App = () => (
  <Router>
    <CartContainer>
      <MainMenu />

      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </CartContainer>
  </Router>
);

export default App;
