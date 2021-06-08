import React from 'react';

const Temperature = ({ cityData }) => {
  const { temp_min, temp_max } = cityData;
  const minCelsius = temp_min - 273.15;
  const maxCelsius = temp_max - 273.15;
  return (
    <div>
      <p>Minimum Temperature: {minCelsius.toFixed(0)}</p>
      <p>Maximum Temperature: {maxCelsius.toFixed(0)}</p>
    </div>
  );
};

export default Temperature;
