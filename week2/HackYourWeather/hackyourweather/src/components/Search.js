import React, { useState } from "react";

const Search = ({ setSearch }) => {
  const [cityName, setCityName] = useState("");

  return (
    <div className="search">
      <input
        placeholder="City Name"
        type="text"
        name="City Name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button className="btn" type="button" onClick={() => setSearch(cityName)}>
        Search
      </button>
    </div>
  );
};

export default Search;
