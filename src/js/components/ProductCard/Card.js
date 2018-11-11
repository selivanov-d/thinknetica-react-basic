import React from 'react';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import cn from 'classnames';

import Price from '../utilities/Price';
import TextBox from '../utilities/TextBox';
import ProductCardImage from './CardImage';

const ProductCard = (props) => {
  const {title, price, imageUrl, imageAlt = title, description} = props.product;
  const {className} = props;

  return (
    <Card className={cn('catalog-items_item product-card', className)}>
      <ProductCardImage src={imageUrl} alt={imageAlt}/>

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
