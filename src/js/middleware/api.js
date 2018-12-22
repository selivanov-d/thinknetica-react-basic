import request from 'axios';

import API_CALL from 'constants/api';

const APICall = (endpoint, method, query) => {
  const options = {
    method,
    url: endpoint,
  };

  if (query) options.params = query;

  return request(options);
};

const nextAction = (action, data) => (
  Object.assign({}, action, data, { [API_CALL]: undefined })
);

export default () => next => (action) => {
  if (!action[API_CALL]) return next(action);

  const {
    endpoint,
    method,
    query,
    payload,
    types,
  } = action[API_CALL];

  const [requestType, successType, failureType] = types;

  next(nextAction(action, { type: requestType }));

  const promise = APICall(endpoint, method, query, payload);

  promise
    .then(response => next(
      nextAction(action, { type: successType, payload: response.data }),
    ))
    .catch(error => (
      nextAction(action, { type: failureType, error })
    ));

  return promise;
};
