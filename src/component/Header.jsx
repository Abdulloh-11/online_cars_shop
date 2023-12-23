import React, { Component } from "react";
import { useState } from "react";


const Header = () => {
    const [selectedOption, setSelectedOption] = useState(null);
  
  
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    return (
      <div className='d-flex justify-content-center gap-3 mt-5 align-items-center'>
        <label className='d-flex align-items-center gap-1'>
          <input
  
            type="radio"
            value="yes"
            checked={selectedOption === 'yes'}
            onChange={handleOptionChange}
          />
         <h1> Yes</h1>
        </label>
        <label className='d-flex align-items-center gap-1'>
          <input
            type="radio"
            value="no"
            checked={selectedOption === 'no'}
            onChange={handleOptionChange}
          />
        <h1> No</h1>
        </label>
        {selectedOption && (
          <p className='w-auto'>
            Siz {selectedOption === 'yes' ? 'ushbu amalga rozisiz' : 'buna qarshisiz'}
          </p>
        )}
      </div>
    );
  
  };
  
  
  export default Header;
  