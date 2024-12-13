import React from 'react';

function Hero() {
  const findFood = () => {
    alert('Finding food near you!');
  };

  return (
    <div className="hero">
      <h1>Are you starving?</h1>
      <p>Within a few clicks, find meals that are accessible near you</p>
      <div className="search-bar">
        <input type="text" placeholder="Enter Your Address" />
        <button onClick={findFood}>Find Food</button>
      </div>
    </div>
  );
}

export default Hero;
