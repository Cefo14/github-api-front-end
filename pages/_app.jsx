/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React from 'react';

import { UsersContextProvider } from '../app/contexts/Users';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
  <UsersContextProvider>
    <Component {...pageProps} />
  </UsersContextProvider>
);

export default App;
