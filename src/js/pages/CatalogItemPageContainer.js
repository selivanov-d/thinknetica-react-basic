import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CatalogItemPage from 'pages/CatalogItemPage';
import ProductPropTypes from 'proptypes/product';

class CatalogItemPageContainer extends Component {
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
  product: ProductPropTypes,
};

const mapStateToProps = (state, ownProps) => {
  const { id: pageId } = ownProps.match.params;
  const product = state.catalog.products.find(item => item.id === pageId);

  return {
    product,
  };
};

export default connect(
  mapStateToProps,
)(CatalogItemPageContainer);
