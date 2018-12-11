import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

const ModalGalleryControl = ({
  to,
  onClick,
  children,
  direction,
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={cn('modal_control', `-${direction}`)}
  >
    {children}
  </Link>
);

ModalGalleryControl.defaultProps = {
  children: '',
};

ModalGalleryControl.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element,
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
};

export default ModalGalleryControl;
