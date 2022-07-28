import type { NextPage } from 'next';
import React from 'react';
import Footer from '../components/footer';
import Card from '../components/card';
import { AppHead } from '../components/head';

const Home: NextPage = () => {
  return (
    <>
      <AppHead />
      <Card />
      <Footer />
    </>
  );
};

export default Home;
