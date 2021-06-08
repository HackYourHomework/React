import React from 'react';

const Temperature = ({ min_temp, max_temp }) => {
  return (
    <div>
      <p>min_temp: {(min_temp - 273).toFixed(1)}</p>
      <p>max_temp: {(max_temp - 273).toFixed(1)}</p>
    </div>
  );
};

export default Temperature;