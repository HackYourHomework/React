import React from 'react';

const Location = ({ props }) => {
  const { lon, lat } = props;
  return (
    <div>
      <p>
        location: <span>{lon}, </span>
        <span>{lat}</span>
      </p>
    </div>
  );
};

export default Location;
