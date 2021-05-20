import React from 'react';
import City from './City';
import WeatherDescription from './WeatherDescription';
import Temperature from './Temperature';
import Location from './Location';

const WeatherForecast = ({ data }) => {
  return (
    <div className="city" key={data.name}>
      <City name={data.name} country={data.sys.country} />
      <WeatherDescription
        weather={data.weather[0].main}
        description={data.weather[0].description}
      />
      <Temperature
        min_temp={data.main.temp_max}
        max_temp={data.main.temp_min}
      />
      <Location location_lat={data.coord.lat} location_lon={data.coord.lon} />
    </div>
  );
};

export default WeatherForecast;
