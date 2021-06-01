import React from 'react';

const City = ({ props }) => {
  const city = props.name;
  const country = props.sys.country;
  return (
    <h1>
      {city}, {country}
    </h1>
  );
};

export default City;
