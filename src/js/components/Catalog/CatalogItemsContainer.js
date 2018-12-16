import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchProducts from 'thunks/catalog';
import ProductPropTypes from 'proptypes/product';
import CatalogItems from 'components/Catalog/CatalogItems';
import CartWidgetContainer from 'components/CartWidget/CartWidgetContainer';

class CatalogItemsContainer extends Component {
  componentWillMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

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
  loadProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(ProductPropTypes).isRequired,
};

const mapStateToProps = state => ({
  products: state.catalog.products,
});

const mapDispatchToProps = dispatch => ({
  loadProducts() {
    dispatch(fetchProducts());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatalogItemsContainer);
