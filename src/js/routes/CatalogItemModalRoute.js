import ModalGallery from 'components/ModalGallery/ModalGallery';
import { catalogItemModalPath } from 'helpers/pathes';

const CatalogItemModalRoute = {
  component: ModalGallery,
  path: catalogItemModalPath(),
  exact: true,
};

export default CatalogItemModalRoute;
