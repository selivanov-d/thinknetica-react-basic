import randomize from 'randomatic';

import {
  SUBMIT_CONTACTS_REQUEST,
  SUBMIT_CONTACTS_SUCCESS,
  SUBMIT_CONTACTS_FAILURE,
} from 'constants/action-types/contacts';
import API_CALL from 'constants/action-types/api';
import {
  apiAccessToken,
  contactsMessageContentTypeId,
  spaceId,
  environmentId,
  apiBase,
  entryIdRandomaticPattern,
  entryIdLength,
} from 'constants/contentful';

const submitContacts = (fields) => {
  const preparedFields = {};

  Object.entries(fields).forEach(([fieldName, fieldValue]) => {
    preparedFields[fieldName] = {
      'en-US': fieldValue,
    };
  });

  const newEntryId = randomize(entryIdRandomaticPattern, entryIdLength);

  return {
    [API_CALL]: {
      endpoint: `${apiBase}/spaces/${spaceId}/environments/${environmentId}/entries/${newEntryId}`,
      method: 'PUT',
      headers: {
        'X-Contentful-Content-Type': contactsMessageContentTypeId,
        'content-type': 'application/x-www-form-urlencoded',
      },
      query: {
        access_token: apiAccessToken,
      },
      payload: {
        fields: preparedFields,
      },
      types: [
        SUBMIT_CONTACTS_REQUEST,
        SUBMIT_CONTACTS_SUCCESS,
        SUBMIT_CONTACTS_FAILURE,
      ],
    },
  };
};

export default submitContacts;
