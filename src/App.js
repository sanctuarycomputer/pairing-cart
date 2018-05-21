import React, { Component } from 'react';
import './App.css';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import productData from './lib/products';

class App extends Component {
  products = productData

  render() {
    return (
      <div>
        <ProductPage products={this.products} />
        <Cart />
      </div>
    );
  }
}

export default App;
