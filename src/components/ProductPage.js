import React, { Component } from 'react';
import './ProductPage.css';
import Product from './Product';

class ProductPage extends Component {
  render() {
    return (
      <div className="ProductPage">
        <h1>Products</h1>
        {this.props.products.map(product => <Product {...product} />)}
      </div>
    );
  }
}

export default ProductPage;
