import React, { useState } from "react";
import Weather from "./Weather"

function Search() {
  const [value, setValue] = useState("");

  const handleChange = (event) => setValue(event.target.value);

  return (
      <label>
        <input className="input" type="text" placeholder="Search City" onChange={handleChange} />
        <Weather city={value} />
      </label>
  );
}

export default Search