/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React from 'react';

const App = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
