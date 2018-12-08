import React, { Component } from 'react'
import Parameters from './Parameters';
import Header from './Header';
import Products from './Products';


class ProductPage extends Component {
  render() {
    return (
      <div className="proPage">
        <Header/>

        <div className="proPage__content">

          <div className="proPage__content--side">
            <Parameters/>
          </div>
          
          <div className="proPage__content--main">
            <Products/>
          </div>
        </div>
        
      </div>
    )
  }
}

export default ProductPage
