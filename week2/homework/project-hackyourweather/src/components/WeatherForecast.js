import React from 'react';
import City from './City';
import WeatherDescription from './WeatherDescription';
import Temperature from './Temperature';
import Location from './Location';

const WeatherForecast = ({ city }) => {
  return (
    <div className="city" key={city.name}>
      <City name={city.name} country={city.sys.country} />
      <WeatherDescription
        weather={city.weather[0].main}
        description={city.weather[0].description}
      />
      <Temperature
        min_temp={city.main.temp_max}
        max_temp={city.main.temp_min}
      />
      <Location location_lat={city.coord.lat} location_lon={city.coord.lon} />
    </div>
  );
};

export default WeatherForecast;
