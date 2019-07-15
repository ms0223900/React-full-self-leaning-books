import React, { Component } from 'react';

class Product extends Component {
    constructor(props){
      super(props);
      this.state = {productId:'', qty: 0, isCart: true}
    }
    addToCart = (pid) => (
      this.setState((state) => (
        {
          productId: pid,
          qty: state.qty + 1
        }
      ))
    )

    removeCart = () => (
      this.setState({isCart: false})
    )

    render(){
        return(
          <div>
            <button onClick={() => this.addToCart(1)}>Add to cart</button>
            <button onClick={() => this.addToCart(2)}>Add to cart</button>
            <button onClick={() => this.addToCart(3)}>Add to cart</button>
            { this.state.isCart && <Cart productId={this.state.productId} qty={this.state.qty}/> }
            { !this.state.isCart && <h2>Cart has been removed</h2>}
            <button type="button" onClick={this.removeCart}>remove Cart</button>
          </div>
        );
    }
}

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      qty: this.props.qty
    }
  }

  static getDeriveStateFromProps(props, state){
    if(props.qty !== state.qty){
      return {qty: props.qty}
    }

    return null;
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.qty !== nextProps.qty){
      console.log('元件已更新');
      return true;
    }
    return false;
  }

  // updateQty = () => (
  //   this.setState((state) => (
  //     { qty: state.qty + 1 }
  //   ))
  // )

  componentDidMount(){
    console.log('元件渲染之後執行');
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.productId !== prevProps.productId){
      console.log('元件已更新')
    }
  }

  componentWillUnmount(){
    console.log('Component 失效');
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
