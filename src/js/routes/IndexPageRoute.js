import IndexPage from 'pages/IndexPage';
import { indexPagePath } from 'helpers/pathes';

const ContactsPageRoute = {
  component: IndexPage,
  path: indexPagePath(),
  exact: true,
};

export default ContactsPageRoute;
