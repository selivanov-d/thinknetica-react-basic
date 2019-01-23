import React from 'react';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import { Row, Col } from 'reactstrap';
import Helmet from 'react-helmet';

const ContactsPage = () => (
  <>
    <Helmet>
      <title>Контакты</title>
    </Helmet>
    <main className="page -404">
      <h1 className="page_title">Контакты</h1>
      <div className="page_body">
        <Row>
          <Col xs={6}>
            <h4>Есть вопросы? Напишите</h4>
            <ContactsForm />
          </Col>
          <Col xs={6}>
            <h4>Хотите встретиться лично? Приходите</h4>
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
          </Col>
        </Row>
      </div>
    </main>
  </>
);

export default ContactsPage;
