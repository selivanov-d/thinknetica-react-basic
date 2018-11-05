import React from 'react';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import cn from 'classnames';

import ProductCardImage from './ProductCardImage';
import Price from './Price';
import TextBox from './TextBox';

const ProductCard = (props) => {
  const imageAlt = (props.imageAlt) ? props.imageAlt : props.title;
  const {imageUrl, title, description, price, className} = props;

  return (
    <Card className={cn('catalog-items_item product-card', className)}>
      <ProductCardImage imageUrl={imageUrl} imageAlt={imageAlt} />

      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>
          <TextBox>{description}</TextBox>
        </CardText>
        <Price value={price}/>
      </CardBody>
    </Card>
  )
};

export default ProductCard;
