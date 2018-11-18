import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import ProductCard from '../ProductCard/ProductCard';

const CatalogItems = ({ products }) => (
  <div className="catalog-items">
    <Row>
      {
        products.map(product => (
          <Col xs="12" sm="6" md="6" lg="4" xl="4" key={product.id}>
            <ProductCard
              product={product}
              className="mb-3"
            />
          </Col>
        ))
      }
    </Row>
  </div>
);

CatalogItems.defaultProps = {
  products: [],
};

CatalogItems.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
  })),
};

export default CatalogItems;
