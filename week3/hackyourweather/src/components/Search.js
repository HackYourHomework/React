import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";

const Search = ({ getCityWeather }) => {
  const [cityName, setCityName] = useState("");

  return (
    <div className="search-box">
      <div className="search">
        <FcSearch />
        <input
          placeholder="Search City"
          type="text"
          name="City Name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>
      <button
        className="btn"
        type="button"
        onClick={() => getCityWeather(cityName)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
