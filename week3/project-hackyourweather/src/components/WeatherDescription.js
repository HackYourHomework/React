import React from 'react';

const WeatherDescription = ({ weather, description }) => {
  return (
    <>
      <h3>{weather}</h3>
      <p className="upperCase">{description}</p>
    </>
  );
};

export default WeatherDescription;
