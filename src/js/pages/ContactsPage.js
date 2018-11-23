import React from 'react';

const ContactsPage = () => (
  <main className="page -404">
    <h1 className="page_title">Контакты</h1>
    <div className="page_body">
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
    </div>
  </main>
);

export default ContactsPage;
