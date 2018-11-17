import React from 'react';
import PropTypes from 'prop-types';

import Image from '../utilities/Image';

const ProductCardImage = ({
  src,
  alt,
  width,
  height,
}) => (
  <Image src={src} alt={alt} width={width} height={height} className="card-img-top product-card_image" />
);

ProductCardImage.defaultProps = {
  alt: '',
  src: '//via.placeholder.com/320x240',
  width: 320,
  height: 240,
};

ProductCardImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ProductCardImage;
