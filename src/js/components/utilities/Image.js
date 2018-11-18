import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  src,
  alt,
  width,
  height,
  className,
}) => (
  <img src={src} alt={alt} width={width} height={height} className={className} />
);

Image.defaultProps = {
  alt: '',
  width: null,
  height: null,
  className: null,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default Image;
