import React, { Component } from 'react'
import SearchBar from './SearchBar';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="search__container">
        
          <div className="search__body">
            <h1 className="signin__body--header"> joOle </h1>
            <h4 className="signin__body--sub"> Building product selection platform</h4>
          </div>

          <div className="search__bar">
            <SearchBar />        
          </div>

        </div>
      </div>
    )
  }
}

export default Search;

