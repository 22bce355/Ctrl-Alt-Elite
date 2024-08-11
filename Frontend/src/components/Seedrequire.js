import React from "react";
import { useState } from "react";

function Seedrequire() {
  const soilTypes = [
    { name: "Good Soil", multiplier: 1.2 },
    { name: "Very Good Soil", multiplier: 1.0 },
    { name: "Best Soil", multiplier: 0.9 },
  ];

  const [selectedSoil, setSelectedSoil] = useState("");
  const [acreage, setAcreage] = useState("");
  const [totalSeeds, setTotalSeeds] = useState(null);

  const baseSeedRate = 10; // Base seed rate in kg/acre

  const handleSoilChange = (e) => {
    setSelectedSoil(e.target.value);
  };

  const handleAcreageChange = (e) => {
    setAcreage(e.target.value);
  };

  const calculateSeeds = () => {
    const soil = soilTypes.find((s) => s.name === selectedSoil);
    if (soil) {
      const seeds = baseSeedRate * soil.multiplier * acreage;
      setTotalSeeds(seeds);
    }
  };

  return (
    <div>
      <h1>Seed Requirement Calculator</h1>
      <div>
        <label>
          Select Soil Quality:
          <select value={selectedSoil} onChange={handleSoilChange}>
            <option value="">--Select Soil Quality--</option>
            {soilTypes.map((soil, index) => (
              <option key={index} value={soil.name}>
                {soil.name} (Multiplier: {soil.multiplier})
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Enter Acreage (in acres):
          <input
            type="number"
            value={acreage}
            onChange={handleAcreageChange}
            placeholder="Enter acreage in acres"
          />
        </label>
      </div>
      <button onClick={calculateSeeds}>Calculate Seed Requirement</button>
      {totalSeeds !== null && (
        <div>
          <h2>Total Seed Requirement: {totalSeeds} kg</h2>
        </div>
      )}
    </div>
  );
}

export default Seedrequire;
