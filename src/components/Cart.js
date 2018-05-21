import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <h1>Your Cart</h1>
        <hr />
        <p>Your cart is currently empty</p>
      </div>
    );
  }
}

export default Cart;
