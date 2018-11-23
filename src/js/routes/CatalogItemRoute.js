import ContactsItemPage from 'pages/CatalogItemPage';
import { catalogItemPagePath } from 'helpers/pathes';

const ContactsPageRoute = {
  component: ContactsItemPage,
  path: catalogItemPagePath(),
  exact: true,
};

export default ContactsPageRoute;
