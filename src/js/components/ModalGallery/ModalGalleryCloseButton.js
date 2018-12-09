import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { catalogItemPagePath } from 'helpers/pathes';

const ModalGalleryCloseButton = ({ match }) => (
  <Link to={catalogItemPagePath(match.params.id)} className="modal_close">
    <FontAwesomeIcon icon="times-circle" />
  </Link>
);

ModalGalleryCloseButton.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(ModalGalleryCloseButton);
