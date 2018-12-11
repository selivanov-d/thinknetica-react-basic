import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const CatalogItemGalleryControl = ({
  onClick,
  children,
  disabled,
  direction,
}) => (
  <button
    type="button"
    className={cn('catalog-item-gallery_control', `-${direction}`)}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

CatalogItemGalleryControl.defaultProps = {
  children: '',
  disabled: false,
};

CatalogItemGalleryControl.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element,
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
};

export default CatalogItemGalleryControl;
