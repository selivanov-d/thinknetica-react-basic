import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import cn from 'classnames';

import Price from './ProductCardPrice';
import ProductCardImage from './ProductCardImage';
import AddToCartButton from './AddToCartButton';

class ProductCard extends Component {
  onDragStart = (event, product) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(product));
  };

  render() {
    const {
      product: {
        title,
        price,
        imageUrl,
        imageAlt = title,
        description,
      },
    } = this.props;
    const { className, product } = this.props;

    return (
      <Card
        className={cn('catalog-items_item product-card', className)}
        draggable
        onDragStart={(event) => {
          this.onDragStart(event, product);
        }}
      >
        <ProductCardImage src={imageUrl} alt={imageAlt} />

        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText className="product-card_text">{description}</CardText>
          <Price value={price} />
          <AddToCartButton cartItemToAdd={product} />
        </CardBody>
      </Card>
    );
  }
}

ProductCard.defaultProps = {
  className: '',
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
