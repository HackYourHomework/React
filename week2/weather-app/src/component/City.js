import React from "react";

export default function City(props) {
  return (
    <div>
      <h2>
        {props.name}, {props.sys.country}
      </h2>
      <h3> {props.weather[0].main}</h3>
      <p>{props.weather[0].description}</p>
      <p>min temp: {props.main.temp_min}</p>
      <p> max temp: {props.main.temp_max}</p>
      <p>
        location: {props.coord.lon}, {props.coord.lat}
      </p>
    </div>
  );
}
