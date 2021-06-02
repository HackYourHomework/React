import React from 'react';
import City from './City';
import WeatherDescription from './WeatherDescription';
import Temperature from './Temperature';
import Location from './Location';
import DeleteBtn from './DeleteBtn';
import { Link } from 'react-router-dom';

const WeatherForecast = ({ city, handleDelete, setCity }) => {
  return (
    <div className="city">
      <Link to={`/${city.id}`} city={city}>
        <City name={city.name} country={city.sys.country} />
      </Link>

      <DeleteBtn
        id={city.id}
        handleDelete={handleDelete}
        city={city}
        setCity={setCity}
      />
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
