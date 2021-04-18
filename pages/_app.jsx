/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React from 'react';

import { UsersContextProvider } from '../app/contexts/Users';
import { RepositoriesContextProvider } from '../app/contexts/Repositories';

import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
  <UsersContextProvider>
    <RepositoriesContextProvider>
      <Component {...pageProps} />
    </RepositoriesContextProvider>
  </UsersContextProvider>
);

export default App;
