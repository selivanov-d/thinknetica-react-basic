import React from 'react';

import Image from './Image';

const ProductCardImage = ({imageUrl = '//via.placeholder.com/320x240', imageAlt, width = 320, height = 240}) => {
  return (
    <Image className="card-img-top product-card_image" src={imageUrl} alt={imageAlt} width={width} height={height}/>
  )
};

export default ProductCardImage;
