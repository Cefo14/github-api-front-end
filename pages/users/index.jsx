import React from 'react';

import Head from 'next/head';
import UsersContainer from '../../app/containers/Users';

const Users = () => (
  <>
    <Head>
      <title>Usuarios</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <UsersContainer />
  </>
);

export default Users;
