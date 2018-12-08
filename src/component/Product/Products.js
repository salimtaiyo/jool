import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getItem } from '../../actions/itemActions';

class Products extends Component {

  componentDidMount(){
     this.props.getItem();
  }

  render() {
    return (
      <div className="products">
        <ul>
          { this.props.item.item.data? this.props.item.item.data.map(item => {
            return (
              <li className="products__item" key={item._id}> 
                <div >
                  {/* Image  */}
                  <img src="http://januarydesign.com/wp-content/uploads/2013/06/usha-fan-4.jpg" 
                      className="products__item--img" 
                      alt="products"/>
                  {/* Header */}
                    <h2> {item.product} </h2>

                    {/* specifcation of the product */}
                    <div className="products__item--specs">
                      {item.airflow} CFM 
                      <br/>
                      {item.power} W at max speed
                      <br/>
                      {item.sound} dBA at max speed 
                      <br/>
                      {item.diameter} fan sweep diameter
                    </div>
                    {/* footer */}
                    <div className="products__item--footer">
                      <input type="checkbox"/> Compare 
                      
                      <button className="products__item--footer--btn"> Add to </button>
                    </div>

                </div>
              </li>
          )}):null}
        </ul>
      </div>
    )

  }
}

const mapStateToProps = state => ({
  item: state.item,
  error: state.error
})

export default connect( mapStateToProps,{getItem})(Products)