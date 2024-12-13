import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">foodwagon</div>
      <div className="location">
        <span>Deliver to:</span>
        <span>Mohammadpur Bus Stand, Dhaka</span>
      </div>
      <div className="actions">
        <a href="#">Search Food</a>
        <a href="#">Login</a>
      </div>
    </header>
  );
}

export default Header;
