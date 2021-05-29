import React from 'react';

const Location = ({ location_lat, location_lon }) => {
  return (
    <p>
      location: {location_lat}, {location_lon}
    </p>
  );
};

export default Location;
