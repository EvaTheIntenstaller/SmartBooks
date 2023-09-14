import React from "react";

function ShoppingCart({ cartItems }) {
  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.label} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
