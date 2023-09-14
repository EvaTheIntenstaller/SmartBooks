import React, { useState } from 'react';

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const updateTotalPrice = (cartItems) => {
    const newTotalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalPrice(newTotalPrice);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="total-price">
        <strong>Total Price: ${totalPrice}</strong>
      </div>
      <div className="product-list">
        <h3>Available Products</h3>
        <ul>
          <li>
            Product 1 - $10
            <button onClick={() => addToCart({ name: 'Product 1', price: 10 })}>Add to Cart</button>
          </li>
          <li>
            Product 2 - $20
            <button onClick={() => addToCart({ name: 'Product 2', price: 20 })}>Add to Cart</button>
          </li>
          <li>
            Product 3 - $30
            <button onClick={() => addToCart({ name: 'Product 3', price: 30 })}>Add to Cart</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;
