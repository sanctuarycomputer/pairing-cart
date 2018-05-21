import React from 'react';
import './Product.css';

const Product = props => (
  <div className="Product">
    <img src={props.imageURL} />
    <p>{props.name}</p>
    <button>Add to Cart</button>
  </div>
)

export default Product;
