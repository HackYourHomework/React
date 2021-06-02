import React from "react";

function Button({ getWeather }) {
  return <button className="btn" onClick={() => getWeather()}>Search</button>;
}

export default Button