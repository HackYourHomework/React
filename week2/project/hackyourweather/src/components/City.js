import React from 'react';

const City = ({ cityData }) => {
  const city = cityData.name;
  const country = cityData.sys.country;
  return (
    <h1>
      {city}, {country}
    </h1>
  );
};

export default City;
