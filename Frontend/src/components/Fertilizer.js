import React from 'react';
import { useState } from 'react';

function Fertilizer() {
    const fertilizers = [
        { name: 'Urea', price_per_50kg: 300 },
        { name: 'DAP', price_per_50kg: 500 },
        { name: 'Potash', price_per_50kg: 400 },
        { name: 'NPK', price_per_50kg: 600 },
        { name: 'Calcium Ammonium Nitrate (CAN)', price_per_50kg: 350 },
      ];
    
      const [selectedFertilizer, setSelectedFertilizer] = useState('');
      const [quantity, setQuantity] = useState('');
      const [totalCost, setTotalCost] = useState(null);
    
      const handleFertilizerChange = (e) => {
        setSelectedFertilizer(e.target.value);
      };
    
      const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
      };
    
      const calculateCost = () => {
        const fertilizer = fertilizers.find(f => f.name === selectedFertilizer);
        if (fertilizer) {
          const cost = (quantity / 50) * fertilizer.price_per_50kg;
          setTotalCost(cost);
        }
      };
    
      return (
        <div>
          <h1>Fertilizer Cost Calculator</h1>
          <div>
            <label>
              Select Fertilizer:
              <select value={selectedFertilizer} onChange={handleFertilizerChange}>
                <option value="">--Select Fertilizer--</option>
                {fertilizers.map((fertilizer, index) => (
                  <option key={index} value={fertilizer.name}>
                    {fertilizer.name} (₹{fertilizer.price_per_50kg}/50kg)
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>
              Enter Quantity (in kg):
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                placeholder="Enter quantity in kg"
              />
            </label>
          </div>
          <button onClick={calculateCost}>Calculate Cost</button>
          {totalCost !== null && (
            <div>
              <h2>Total Cost: ₹{totalCost}</h2>
            </div>
          )}
        </div>
      );
    
}

export default Fertilizer;
