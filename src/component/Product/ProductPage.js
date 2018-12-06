import React, { Component } from 'react'
import Parameters from './Parameters';
import Header from './Header';
import Products from './Products';


class ProductPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Parameters/>
        <Products/>
      </div>
    )
  }
}

export default ProductPage
