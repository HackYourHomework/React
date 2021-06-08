import React from "react";
import { Link } from "react-router-dom";

const City = (props) => {
  
  const removeCity = async (deleteCity) => {
    const cityDeleted = await props.cities.filter((city) => city !== deleteCity);
    props.setCities((cities) => cityDeleted);
  };

  return (
    <div className="CityWeather">
      <Link className="Link" to={`/${props.city.id}`}>
        {props.city.name}, {props.city.sys.country}
      </Link>
      <h3>
        {props.city.weather[0].main} <br />
        <span>{props.city.weather[0].description}</span>
      </h3>
      <h5>min temp: {props.city.main.temp_min}</h5>
      <h5>max temp: {props.city.main.temp_max}</h5>
      <h5>
        location:{props.city.coord.lat}, {props.city.coord.lon}
      </h5>
      <button className="close" onClick={() => removeCity(props.city)}>
        X
      </button>
    </div>
  );
};

export default City;
