import React from 'react';

const Temperature = ({ props }) => {
  const { min, max } = props;
  const minCelsius = min - 273.15;
  const maxCelsius = max - 273.15;
  return (
    <div>
      <p>Minimum Temperature: {minCelsius.toFixed(0)}</p>
      <p>Maximum Temperature: {maxCelsius.toFixed(0)}</p>
    </div>
  );
};

export default Temperature;
