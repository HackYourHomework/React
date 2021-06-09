import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function City(cityName, handleDelete) {
  return (
    <div>
      <h2>
        {cityName.name} {cityName.sys && cityName.sys.country}
      </h2>
      <h3> {cityName.weather && cityName.weather[0].main}</h3>
      <p>{cityName.weather && cityName.weather[0].description}</p>
      <p>min temp: {cityName.main && cityName.main.temp_min}</p>
      <p> max temp: {cityName.main && cityName.main.temp_max}</p>
      <p>
        location: {cityName.coord && cityName.coord.lon}
        {cityName.coord && cityName.coord.lat}
      </p>
      <FaTrashAlt onClick={() => handleDelete(cityName.id)} />
    </div>
  );
}
