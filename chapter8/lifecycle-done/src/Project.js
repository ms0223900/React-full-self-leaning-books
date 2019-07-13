import React, { Component } from 'react';

class Product extends Component {
    render(){
        return(
          <div>
            <p>Product</p>
          </div>
        );
    }
}

class Cart extends Component {
  render(){
    return (
      <div>
        <h1>Cart Items</h1>
      </div>
    );
  }
}

export default Product;
