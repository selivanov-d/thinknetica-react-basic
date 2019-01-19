import React from 'react';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import { Row, Col } from 'reactstrap';

const ContactsPage = () => (
  <main className="page -404">
    <h1 className="page_title">Контакты</h1>
    <div className="page_body">
      <Row>
        <Col xs="6">
          <p>
            <b>Адрес:</b>
            {' '}
            г. Самара, ул. Несуществующая, д. 1
          </p>
          <p>
            <b>Телефон:</b>
            {' '}
            +7 (960) 123-34-45, +7 (960) 567-78-89
          </p>
          <ContactsForm />
        </Col>
      </Row>
    </div>
  </main>
);

export default ContactsPage;
