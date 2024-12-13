import React from 'react';

function Deals() {
  const deals = [
    { img: 'images/salad1.jpg', discount: '15% Off', title: 'Greys Vage', days: '6 Days Remaining' },
    { img: 'images/salad2.jpg', discount: '10% Off', title: 'Greys Vage', days: '6 Days Remaining' },
    { img: 'images/salad3.jpg', discount: '25% Off', title: 'Greys Vage', days: '7 Days Remaining' },
    { img: 'images/salad4.jpg', discount: '20% Off', title: 'Greys Vage', days: '8 Days Remaining' },
  ];

  return (
    <div className="deals">
      {deals.map((deal, index) => (
        <div className="deal" key={index}>
          <img src={deal.img} alt="Dish" />
          <div className="discount">{deal.discount}</div>
          <div className="details">
            <p>{deal.title}</p>
            <p className="remaining">{deal.days}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Deals;
