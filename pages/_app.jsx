/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React from 'react';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
