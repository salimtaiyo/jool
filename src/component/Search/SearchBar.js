import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
  return (
    <div className="bar">
        <select className="bar__select">
            <option value="mechanical"> Mechanical </option>
            <option value="hvacfans"> HVAC Fans</option>
            <option value="mercedes"></option>
            <option value="audi"></option>
        </select>

        <input type="text" placeholder="Search" className="bar__search"/>
        <FontAwesomeIcon className="bar__btn" icon={faSearch}/>
    </div>
    )
}

export default SearchBar
