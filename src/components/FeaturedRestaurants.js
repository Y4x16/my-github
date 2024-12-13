import React from 'react';

function FeaturedRestaurants() {
  const restaurants = [
    { img: 'images/FR1.jpg', discount: '20% off', fast: true, name: 'Foodworld', rating: 46, status: 'Opens tomorrow' },
    { img: 'images/FR1.jpg', discount: '15% off', fast: true, name: 'Pizzahub', rating: 40, status: 'Opens tomorrow' },
    { img: 'images/FR1.jpg', discount: '10% off', fast: true, name: 'Donuts hut', rating: 20, status: 'Open Now' },
    { img: 'images/FR1.jpg', discount: '15% off', fast: true, name: 'Donuts hut', rating: 50, status: 'Open Now' },
  ];

  return (
    <section className="featured-restaurants">
      <h2>Featured Restaurants</h2>
      <div className="restaurants">
        {restaurants.map((restaurant, index) => (
          <div className="restaurant" key={index}>
            <img src={restaurant.img} alt={restaurant.name} />
            <div className="tags">
              <span className="discount">{restaurant.discount}</span>
              {restaurant.fast && <span className="fast">Fast</span>}
            </div>
            <h3>{restaurant.name}</h3>
            <p>⭐ {restaurant.rating}</p>
            <span className={`status ${restaurant.status.includes('Open') ? 'open' : 'closed'}`}>
              {restaurant.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedRestaurants;
