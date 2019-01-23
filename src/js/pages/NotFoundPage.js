import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import { indexPagePath } from 'helpers/pathes';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>404</title>
    </Helmet>
    <main className="page -404">
      <h1 className="page_title">Страница не найдена</h1>
      <p>
        К сожалению, такой страницы не существует.
        {' '}
        Вероятно, она была удалена автором, либо её никогда не было.
      </p>
      <p>
        Вернитесь на
        {' '}
        <Link to={indexPagePath()}>главную страницу</Link>
        {' '}
        и начните сначала.
      </p>
    </main>
  </>
);

export default NotFoundPage;
