import createBrowserHistory from 'history/createBrowserHistory';
import { matchPath } from 'react-router-dom';

import routes from 'routes';
import store from 'root/store';
import prepareData from 'helpers/prepare-data';

const history = createBrowserHistory();

const historyCb = (location) => {
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
};

history.listen(historyCb);

historyCb(window.location);

export default history;
