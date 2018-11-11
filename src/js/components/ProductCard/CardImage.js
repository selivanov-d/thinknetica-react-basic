import React from 'react';

import Image from '../utilities/Image';

const ProductCardImage = ({src = '//via.placeholder.com/320x240', alt, width = 320, height = 240}) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} className="card-img-top product-card_image"/>
  )
};

export default ProductCardImage;
