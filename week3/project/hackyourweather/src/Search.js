import React from "react";

const Search = (props) => {
  return (
    <div>
      <input
        placeholder="Search City"
        type="text"
        value={props.searchInput}
        onChange={(event) => props.setSearchInput(event.target.value)}
      />
      <button onClick={props.fetchWeather}>Search</button>
    </div>
  );
};

export default Search;
