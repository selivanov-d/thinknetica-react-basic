import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createClient } from 'contentful';

import contentfulConfig from 'constants/contentful';
import CatalogItemPage from 'pages/CatalogItemPage';

class CatalogItemPageContainer extends Component {
  state = {
    product: null,
  };

  componentWillMount() {
    const client = createClient({
      space: contentfulConfig.spaceId,
      accessToken: contentfulConfig.accessToken,
    });

    const { match } = this.props;
    const { id: pageId } = match.params;

    client
      .getEntry(pageId)
      .then((entry) => {
        const productFields = this.getProductsFields(entry);

        this.setState({ product: productFields });
      });
  }

  getProductsFields = (entry) => {
    const { title, longDescription, gallery } = entry.fields;
    const clearGallery = gallery.map(item => ({
      id: item.sys.id,
      imageUrl: item.fields.file.url,
      title: item.fields.title,
    }));

    return { title, longDescription, gallery: clearGallery };
  };

  render() {
    const { product } = this.state;

    return (
      product && <CatalogItemPage product={product} />
    );
  }
}

CatalogItemPageContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default CatalogItemPageContainer;
