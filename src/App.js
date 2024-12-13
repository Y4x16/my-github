import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Deals from './components/Deals';
import HowItWorks from './components/HowItWorks';
import FeaturedRestaurants from './components/FeaturedRestaurants';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Deals />
      <HowItWorks />
      <FeaturedRestaurants />
    </div>
  );
}

export default App;
