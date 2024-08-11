import React from 'react';
import { useState } from 'react';

function Irrigation() {
    const [area, setArea] = useState('');
    const [cost, setCost] = useState(null);
    const [method, setMethod] = useState('');
  
    const handleAreaChange = (e) => {
      setArea(e.target.value);
    };
  
    const handleMethodChange = (e) => {
      setMethod(e.target.value);
    };
  
    const calculateCost = () => {
      let totalCost = 0;
      if (method === 'surface') {
        totalCost = area * 12000;
      } else if (method === 'drip') {
        totalCost = area * 20000;
      } else if (method === 'canal') {
        totalCost = area * 10000;
      }
      setCost(totalCost);
    };
    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            import React, { useState } from 'react';
    <div>
      <h1>Irrigation Cost Calculator</h1>
      <div>
        <label>
          Enter Area (in acres):
          <input
            type="number"
            value={area}
            onChange={handleAreaChange}
            placeholder="Enter area in acres"
          />
        </label>
      </div>
      <div>
        <label>
          Select Irrigation Method:
          <select value={method} onChange={handleMethodChange}>
            <option value="">--Select Method--</option>
            <option value="surface">Surface Irrigation (₹12k/acre)</option>
            <option value="drip">Drip Irrigation (₹20k/acre)</option>
            <option value="canal">Canal Irrigation (₹10k/acre)</option>
          </select>
        </label>
      </div>
      <button onClick={calculateCost}>Calculate Cost</button>
      {cost !== null && (
        <div>
          <h2>Total Cost: ₹{cost}</h2>
        </div>
      )}
    </div>
        </div>
    );
}

export default Irrigation;
