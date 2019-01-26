import randomize from 'randomatic';
import pick from 'lodash/pick';

import API_CALL from 'constants/action-types/api';
import {
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
  SUBMIT_ORDER_FAILURE,
} from 'constants/action-types/order';
import {
  apiAccessToken,
  apiBase,
  orderContentTypeId,
  entryIdLength,
  entryIdRandomaticPattern,
  environmentId,
  spaceId,
} from 'constants/contentful';

const submitOrder = (fields) => {
  const preparedFields = {};

  const formFields = pick(fields, ['firstName', 'lastName', 'email', 'message']);

  Object.entries(formFields).forEach(([fieldName, fieldValue]) => {
    preparedFields[fieldName] = {
      'en-US': fieldValue,
    };
  });

  const preparedItems = [];

  fields.items.forEach((item) => {
    preparedItems.push({
      title: item.product.title,
      price: item.product.price,
      quantity: item.quantity,
    });
  });

  preparedFields.items = {
    'en-US': preparedItems,
  };

  const newEntryId = randomize(entryIdRandomaticPattern, entryIdLength);

  return {
    [API_CALL]: {
      endpoint: `${apiBase}/spaces/${spaceId}/environments/${environmentId}/entries/${newEntryId}`,
      method: 'PUT',
      headers: {
        'X-Contentful-Content-Type': orderContentTypeId,
        'content-type': 'application/x-www-form-urlencoded',
      },
      query: {
        access_token: apiAccessToken,
      },
      payload: {
        fields: preparedFields,
      },
      types: [
        SUBMIT_ORDER_REQUEST,
        SUBMIT_ORDER_SUCCESS,
        SUBMIT_ORDER_FAILURE,
      ],
    },
  };
};

export default submitOrder;
