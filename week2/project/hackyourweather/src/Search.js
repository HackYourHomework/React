import React from "react";

function Search(props) {
  return (
    <div>
      <input
        placeholder="A city name"
        type="text"
        value={props.searchInput}
        onChange={(event) => props.setSearchInput(event.target.value)}
      />
      <button onClick={(event) => props.setSearchBtn(props.searchInput)}>
        Search
      </button>
    </div>
  );
}

export default Search;
