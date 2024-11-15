import Banner from './components/Banner/index';
import People from './components/People/index';
import Features from './components/Features/index';
import Business from './components/Business/index';
import Payment from './components/Payment/index';
import Pricing from './components/Pricing/index';
import React from 'react';

export default function Home() {
  return (
    <React.StrictMode>
    <main>
      <Banner />
      <People />
      <Features />
      <Business />
      <Payment />
      <Pricing />
    </main>
    </React.StrictMode>
  )
}
