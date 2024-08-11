import React from "react";
import { useState } from "react";

function LabourCost() {
  const laborData = [
    { State: "Andhra Pradesh", Value: 307.15 },
    { State: "Assam", Value: 250.97 },
    { State: "Bihar", Value: 260.41 },
    { State: "Gujarat", Value: 208.89 },
    { State: "Haryana", Value: 378 },
    { State: "Himachal Pradesh", Value: 421.67 },
    { State: "Jammu & Kashmir", Value: 444.97 },
    { State: "Karnataka", Value: 292.04 },
    { State: "Kerala", Value: 701.79 },
    { State: "Madhya Pradesh", Value: 201.49 },
    { State: "Maharashtra", Value: 236.73 },
    { State: "Manipur", Value: 212 },
    { State: "Meghalaya", Value: 231.25 },
    { State: "Orissa", Value: 231.85 },
    { State: "Punjab", Value: 351.8 },
    { State: "Rajasthan", Value: 300.63 },
    { State: "Tamil Nadu", Value: 411.35 },
    { State: "Tripura", Value: 270 },
    { State: "Uttar Pradesh", Value: 261.47 },
    { State: "West Bengal", Value: 267.05 },
    { State: "All India", Value: 288.89 },
  ];
  const [state, setState] = useState(laborData[0].State);
  const [acres, setAcres] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleAcresChange = (e) => {
    setAcres(e.target.value);
  };

  const calculateCost = () => {
    const laborValue = laborData.find((item) => item.State === state).Value;
    setTotalCost(laborValue * acres);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">Labor Cost Calculator</h1>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          State:
        </label>
        <select
          value={state}
          onChange={handleStateChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {laborData.map((item) => (
            <option key={item.State} value={item.State}>
              {item.State}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Acres of Land:
        </label>
        <input
          type="number"
          value={acres}
          onChange={handleAcresChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="1"
        />
      </div>

      <button
        onClick={calculateCost}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Calculate
      </button>

      {totalCost > 0 && (
        <div className="mt-4 text-lg">
          Total Labor Cost: <strong>${totalCost.toFixed(2)}</strong>
        </div>
      )}
    </div>
  );
}

export default LabourCost;
