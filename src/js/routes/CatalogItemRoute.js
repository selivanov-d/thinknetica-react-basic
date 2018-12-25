import CatalogItemPageContainer from 'pages/CatalogItemPageContainer';
import { catalogItemPagePath } from 'helpers/pathes';
import fetchProducts from 'actions/products';

const CatalogItemPageRoute = {
  component: CatalogItemPageContainer,
  path: catalogItemPagePath(),
  exact: false,
  prepareData: (store, query, params) => {
    if (!store.getState().catalog.products.find(item => item.id === params.id)) {
      store.dispatch(fetchProducts(params.id));
    }
  },
};

export default CatalogItemPageRoute;
