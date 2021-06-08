import React from 'react';
import { Link } from '../../node_modules/react-router-dom';
import City from './City';
import Location from './Location';
import Temperature from './Temperature';
import Description from './Description';

const CityBox = ({ cityData, removeCity }) => {
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
      <button onClick={removeCity.bind(this)}>X</button>
      <City cityData={cityData} />
      <Description cityData={cityData} />
      <Temperature cityData={cityData} />
      <Location cityData={cityData} />
      <Link to={`/${cityData.id}`}>Show Chart</Link>
    </div>
  );
};

export default CityBox;
