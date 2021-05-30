import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

const City = ({ city, onDelete }) => {
  const cityId = city.id;
  const history = useHistory();

  return (
    <div className="city">
      <div className="city-header">
        <h2>
          {city.name}, {city.sys.country}
        </h2>
        <h4>
          <Link to={`/${cityId}`}>
            <button className="btn" onClick={() => history.goBack()}>
              forecast
            </button>
          </Link>
        </h4>
        <i>
          <FaTimes onClick={() => onDelete(cityId)} />
        </i>
      </div>
      <h3>{city.weather[0].main}</h3>
      <h4>{city.weather[0].description}</h4>
      <h5>min temp: {city.main.temp_min}</h5>
      <h5>max temp: {city.main.temp_max}</h5>
      <h5>
        location: {city.coord.lon}, {city.coord.lat}
      </h5>
    </div>
  );
};

export default City;
