import CatalogItemPageContainer from 'pages/CatalogItemPageContainer';
import { catalogItemPagePath } from 'helpers/pathes';

const CatalogItemPageRoute = {
  component: CatalogItemPageContainer,
  path: catalogItemPagePath(),
  exact: false,
};

export default CatalogItemPageRoute;
