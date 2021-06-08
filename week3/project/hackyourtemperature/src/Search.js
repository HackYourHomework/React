import { useState } from "react";
import Fetch from "./Fetch";
import "./style.css";

const Search = (props) => {
  console.log(props);
  const [cityName, setCityName] = useState();
  const getName = (e) => {
    e.preventDefault();
    setCityName(e.target.value);
  };
  return (
    <div className="app_container">
      <form>
        <input
          className="searchInput"
          type="text"
          placeholder="Enter the City Name ...."
          onChange={getName}
          value={cityName}
        />
      </form>

      <Fetch
        cityName={cityName}
        setCityName={setCityName}
        weatherData={props.weatherData}
        setWeatherData={props.setWeatherData}
      />
    </div>
  );
};

export default Search;
