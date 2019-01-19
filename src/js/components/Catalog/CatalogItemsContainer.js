import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductPropTypes from 'proptypes/product';
import CatalogItems from 'components/Catalog/CatalogItems';
import CartWidgetContainer from 'components/CartWidget/CartWidgetContainer';

class CatalogItemsContainer extends Component {
  render() {
    const { products } = this.props;

    return (
      <>
        <CatalogItems products={products} />
        <CartWidgetContainer />
      </>
    );
  }
}

CatalogItemsContainer.propTypes = {
  products: PropTypes.arrayOf(ProductPropTypes).isRequired,
};

const mapStateToProps = state => ({
  products: state.catalog.products,
});

export default connect(
  mapStateToProps,
)(CatalogItemsContainer);
