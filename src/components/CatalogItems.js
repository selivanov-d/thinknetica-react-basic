import React from 'react';
import {Row, Col} from 'reactstrap';

import ProductCard from './ProductCard';

const CatalogItems = (props) => {
  const {products} = props;

  return (
    <div className="catalog_items catalog-items">
      <Row>
        {
          products.map(product => {
            return (
              <Col xs="12" sm="6" md="4" lg="3" xl="3">
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  description={product.description}
                  className="mb-3"
                />
              </Col>
            )
          })
        }
      </Row>
    </div>
  );
};

export default CatalogItems;
