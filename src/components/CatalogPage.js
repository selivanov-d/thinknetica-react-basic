import React from 'react';
import {Container} from 'reactstrap';

import CatalogItems from './CatalogItems';
import products from '../constants/Products';

const CatalogPage = () => {
  return (
    <div className="page -catalog">
      <Container>
        <h1 className="page_title">Страница каталога</h1>
        <CatalogItems products={products}/>
      </Container>
    </div>
  )
};

export default CatalogPage;
