import React from 'react';

import Head from 'next/head';
import RepositoriesContainer from '../../app/containers/Repositories';

const Repositories = () => (
  <>
    <Head>
      <title>Repositorios</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <RepositoriesContainer />
  </>
);

export default Repositories;
