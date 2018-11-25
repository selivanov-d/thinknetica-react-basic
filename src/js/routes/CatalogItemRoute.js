import CatalogItemPage from 'pages/CatalogItemPage';
import { catalogItemPagePath } from 'helpers/pathes';

const CatalogItemPageRoute = {
  component: CatalogItemPage,
  path: catalogItemPagePath(),
  exact: true,
};

export default CatalogItemPageRoute;
