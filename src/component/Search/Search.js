import React, { Component } from 'react'
import SearchBar from './SearchBar';
import {Slider} from '../Slider';
import { Link } from 'react-router-dom';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="search__container">
        
          <div className="search__body">
            <img src="logo.png" className="search__body--img" alt="logo"/>
            <h4 className="signin__body--sub"> Building product selection platform</h4>
          </div>

          <div className="search__bar">
            <SearchBar />        
            <Link to="/product"> Link to product page </Link>
          </div>

        </div>
      </div>
    )
  }
}

export default Search;

