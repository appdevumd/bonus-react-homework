import React, { useState } from 'react';
import './RadioButtonGroup.css';

/* This is a RadioButtonGroup Component
    Assignment Description


*/
const RadioButtonGroup = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleRadioButtonClick = (event) => {
    /* TODO: use the hook from line 10 to change the selectedNumber */
    /* hint: you can get the new number with event.target.value */
    setSelectedNumber(Number(event.target.value))
  };

  const getColor = () => {
    switch (selectedNumber) {
      /* TODO: write logic to return the appropriate color */
        case 1:
          return 'red';
        case 2:
          return 'blue';
        case 3:
          return 'green';
        case 4:
          return 'aqua';
        case 5:
          return 'purple';
        default:
          return 'black';
    
    }
  };
  
  return (
    <div className="radio-button-group" style={{ backgroundColor: getColor() }}>
      {[1, 2, 3, 4, 5].map(number => (
        <div className="radio-button-container" key={number}>
          <label>
            {number}
            <input
              type="radio"
              value={number}
              checked={selectedNumber === number}
              onChange={handleRadioButtonClick}
            />
          </label>
        </div>
      ))}
      <p>Selected Number: {selectedNumber}</p>
    </div>
  );
};

export default RadioButtonGroup;
