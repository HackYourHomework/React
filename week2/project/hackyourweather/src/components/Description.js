import React from 'react';

const Description = ({ cityData }) => {
  const { main, description } = cityData.weather[0];
  return (
    <div>
      <h3>{main}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Description;
