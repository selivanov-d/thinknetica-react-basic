import React, { Component } from 'react';
import { createClient } from 'contentful';
import get from 'lodash/get';

import CatalogItems from 'components/Catalog/CatalogItems';
import contentfulConfig from 'constants/contentful';
import CartWidgetContainer from 'components/CartWidget/CartWidgetContainer';

class CatalogItemsContainer extends Component {
  state = {
    products: [],
  };

  componentWillMount() {
    const client = createClient({
      space: contentfulConfig.spaceId,
      accessToken: contentfulConfig.accessToken,
    });

    client
      .getEntries({
        content_type: contentfulConfig.catalogItemType,
        select: contentfulConfig.catalogItemFields,
      })
      .then((entries) => {
        const productsFields = this.getProductsFields(entries.items);

        this.setState({ products: productsFields });
      });
  }

  getProductsFields = entries => (
    entries.reduce((result, item) => {
      const newItem = item.fields;

      newItem.id = get(item, 'sys.id');
      newItem.imageUrl = get(item, 'fields.gallery[0].fields.file.url');

      result.push(newItem);
      return result;
    }, [])
  );

  render() {
    const { products } = this.state;

    return (
      <>
        <CatalogItems products={products} />
        <CartWidgetContainer products={products} />
      </>
    );
  }
}


export default CatalogItemsContainer;
