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
import get from 'lodash/get';

import { catalogItemPagePath } from 'helpers/pathes';
import ProductPropTypes from 'proptypes/product';
import ProductCartPrice from 'components/ProductCard/ProductCardPrice';
import ProductCardImage from 'components/ProductCard/ProductCardImage';
import AddToCartButton from 'components/ProductCard/AddToCartButton';

class ProductCard extends Component {
  onDragStart = (event, product) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(product));
  };

  render() {
    const { product, className } = this.props;
    const {
      id,
      title,
      price,
      gallery,
      imageAlt = title,
      shortDescription,
    } = product;

    return (
      <Card
        className={cn('catalog-items_item product-card', className)}
        draggable
        onDragStart={(event) => {
          this.onDragStart(event, product);
        }}
      >
        <ProductCardImage src={get(gallery, '[0].imageUrl')} alt={imageAlt} />

        <CardBody>
          <CardTitle>
            <Link to={catalogItemPagePath(id)}>{title}</Link>
          </CardTitle>
          <CardText className="product-card_text">{shortDescription}</CardText>
          <ProductCartPrice value={price} />
          <AddToCartButton product={product} />
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
  product: ProductPropTypes.isRequired,
};

export default ProductCard;
