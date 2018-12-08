import React from 'react'

function Parameters() {
  return (
    <div className="sideContainer">

      <div className="sideHead">
        <span> Search : </span>
        <button> Save </button>
        <button> Clear </button>
      </div>
      
      { /*  Product and Project tab */ }
      <div className="side">

        <div className="side__header">
          <div> Product </div>
          <div> Project </div>
        </div>

        { /* PRODUCT */}
        <div className="product__contents">
          <div className="product__contents--type">
            <h3> Product Type </h3>
            <div>
              Model year: <input type="text" className="type--input"/> - <input className="type--input"/>
            </div>
          </div>

          <div className="product__contents-specs">

            <div className="specs--one">
              <span> *** Airflow(CFM) </span>
              <br/>
              <span> 1</span> <span><input type="range"/><input type="range"/></span> <span> 1</span>
            </div>

            <div className="specs--two">
              <span> *** Max Power(W)</span>
              <br/> 
              <span> 1 </span> <input type='range'/> <span> 1 </span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Parameters
