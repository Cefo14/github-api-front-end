import React from 'react';
import Head from 'next/head';

import HomeContainer from '../app/containers/Home';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomeContainer />
  </>
);

export default Home;
