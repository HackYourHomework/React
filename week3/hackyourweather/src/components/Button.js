import React from "react";

function Button({ getWeather, value }) {
  return <button className="btn" onClick={() => {
    if(value.length >=1){
      getWeather()
    }
  }}>Search</button>;
}

export default Button