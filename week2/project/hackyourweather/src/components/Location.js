import React from 'react';

const Location = ({ cityData }) => {
  const { lon, lat } = cityData.coord;
  return (
    <div>
      <p>
        location: <span>{lon} , </span>
        <span>{lat}</span>
      </p>
    </div>
  );
};

export default Location;
