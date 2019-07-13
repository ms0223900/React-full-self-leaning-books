import React, { Component } from 'react';

class Product extends Component {
    render(){
        return(
          <div>
            <Cart />
          </div>
        );
    }
}

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      qty: 0
    }
  }

  updateQty = () => (
    this.setState((state) => (
      { qty: state.qty + 1 }
    ))
  )
  componentDidMount(){
    console.log('元件渲染之後執行');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('元件已更新')
  }

  render(){
    return (
      <div>
        <h1>Cart Items { this.state.qty }</h1>
        <button onClick = { this.updateQty }>更新</button>
      </div>
    );
  }
}

export default Product;
