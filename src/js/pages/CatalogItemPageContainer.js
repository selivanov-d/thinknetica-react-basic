import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CatalogItemPage from 'pages/CatalogItemPage';
import fetchProducts from 'thunks/catalog';
import ProductPropTypes from 'proptypes/product';

class CatalogItemPageContainer extends Component {
  componentWillMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { product } = this.props;

    return (
      product && <CatalogItemPage product={product} />
    );
  }
}

CatalogItemPageContainer.defaultProps = {
  product: null,
};

CatalogItemPageContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  loadProducts: PropTypes.func.isRequired,
  product: ProductPropTypes,
};

const mapStateToProps = (state, ownProps) => {
  const { id: pageId } = ownProps.match.params;
  const product = state.catalog.products.find(item => item.id === pageId);

  return {
    product,
  };
};

const mapDispatchToProps = dispatch => ({
  loadProducts() {
    dispatch(fetchProducts());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatalogItemPageContainer);
