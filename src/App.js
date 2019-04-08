import React, { Component } from 'react';

class App extends Component {

  state = {
    availableProducts: 7,
    productsInBasket: 0,
  }

  confirmAgeHandler = () => {
    this.setState((prevState) => {
      return { ageConfirmed: !prevState.ageConfirmed }
    })
  }

  removeFromBasketHandler = () => {
    this.setState((prevState) => {
      return { productsInBasket: prevState.productsInBasket - 1 }
    })
  }

  addToBasketHandler = () => {
    this.setState((prevState) => {
      return { productsInBasket: prevState.productsInBasket + 1 }
    })
  }

  buyProductsHandler = () => {
    this.setState((prevState) => {
      return {
        availableProducts: prevState.availableProducts - prevState.productsInBasket,
        productsInBasket: 0
      }
    })
  }

  render() {
    const style = {
      border: '2px solid black',
      margin: '30px',
      padding: '30px',
      fontSize: '30px',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontWeight: 'bold'
    }

    return (
      <div style={{ textAlign: 'center', fontSize: '30px', margin: '100px' }}>
        <p>Products on stock: {this.state.availableProducts}</p>
        <div>
          <button style={style} disabled={this.state.productsInBasket > 0 ? false : true} onClick={this.removeFromBasketHandler}> - </button>
          <span style={this.state.productsInBasket === 0 ? { opacity: 0.3 } : {}} > {this.state.productsInBasket} </span>
          <button style={style} disabled={this.state.availableProducts === this.state.productsInBasket} onClick={this.addToBasketHandler}> + </button>
        </div>
        {this.state.productsInBasket > 0 && <button style={style} onClick={this.buyProductsHandler}>Buy Now</button>}
      </div>
    );
  }
}

export default App;
