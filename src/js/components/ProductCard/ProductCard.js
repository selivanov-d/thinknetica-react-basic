import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import cn from 'classnames';

import ProductCartPrice from 'components/ProductCard/ProductCardPrice';
import ProductCardImage from 'components/ProductCard/ProductCardImage';
import AddToCartButton from 'components/ProductCard/AddToCartButton';

class ProductCard extends Component {
  onDragStart = (event, product) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(product));
  };

  render() {
    const {
      product: {
        id,
        title,
        price,
        imageUrl,
        imageAlt = title,
        shortDescription,
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
          <CardTitle>
            <Link to={`/product/${id}`}>{title}</Link>
          </CardTitle>
          <CardText className="product-card_text">{shortDescription}</CardText>
          <ProductCartPrice value={price} />
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
    shortDescription: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
