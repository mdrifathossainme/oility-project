import React, { useState } from 'react';
import BestSellers from './BestSellers';
import './ex.css'
import Featured from './Featured';
import NewArrival from './NewArrival';
import SpecialOfferl from './SpecialOfferl';
const ExclusiveProducts = () => {
  
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
          <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
      New Arrival
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Best Sellers
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
         Featured
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
    Special Offer
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content   active-content" : "content"}
        >
          
          <NewArrival/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <BestSellers/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         <Featured/>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <SpecialOfferl/>
         
        </div>
      </div>
    </div>
  );

}

export default ExclusiveProducts;