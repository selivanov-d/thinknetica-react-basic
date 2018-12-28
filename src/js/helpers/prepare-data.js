import { parse } from 'qs';
import { compact } from 'lodash/array';
import { map } from 'lodash/collection';

export default (store, { location, params, routes }) => {
  const query = parse(location.search, { ignoreQueryPrefix: true });

  const prepareDataFns = compact(map(routes, route => route.prepareData));

  return map(
    prepareDataFns,
    prepareData => prepareData(store, query, params),
  );
};
