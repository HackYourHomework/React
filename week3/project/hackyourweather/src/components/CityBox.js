import React from 'react';
import City from './City';
import Location from './Location';
import Temperature from './Temperature';
import Description from './Description';

const CityBox = ({ cityData }) => {
  return (
    <div
      style={{
        textAlign: 'left',
        border: '1px solid black',
        width: '500px',
        padding: '20px',
        margin: '0 auto',
        marginTop: '10px',
      }}
    >
      <City cityData={cityData} />
      <Description cityData={cityData} />
      <Temperature cityData={cityData} />
      <Location cityData={cityData} />
    </div>
  );
};

export default CityBox;
