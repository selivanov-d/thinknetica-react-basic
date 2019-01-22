import { parse } from 'qs';
import compact from 'lodash-es/compact';
import map from 'lodash-es/map';

export default (store, { location, params, routes }) => {
  const query = parse(location.search, { ignoreQueryPrefix: true });

  const prepareDataFns = compact(map(routes, route => route.prepareData));

  return map(
    prepareDataFns,
    prepareData => prepareData(store, query, params),
  );
};
