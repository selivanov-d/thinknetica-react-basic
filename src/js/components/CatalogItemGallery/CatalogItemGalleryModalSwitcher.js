import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CatalogItemGalleryModalTrigger = ({ to }) => (
  <Link to={to} className="catalog-item-gallery_modal-trigger">
    <FontAwesomeIcon icon="expand-arrows-alt" />
  </Link>
);

CatalogItemGalleryModalTrigger.propTypes = {
  to: PropTypes.string.isRequired,
};

export default CatalogItemGalleryModalTrigger;
