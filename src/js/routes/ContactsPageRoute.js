import ContactsPage from 'pages/ContactsPage';
import { contactsPagePath } from 'helpers/pathes';

const ContactsPageRoute = {
  component: ContactsPage,
  path: contactsPagePath(),
  exact: true,
};

export default ContactsPageRoute;
