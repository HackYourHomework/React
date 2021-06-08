import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import SearchBtn from './SearchBtn';

function SearchInput({ fetchCity }) {
  const [inputCity, setInputCity] = useState();

  return (
    <div id="input-btn">
      <div className="input">
        <i>
          <MdSearch />
        </i>
        <form>
          <label>
            <input
              name="name"
              type="text"
              onChange={(e) => {
                setInputCity(e.target.value);
              }}
              placeholder="Search City"
              required
            />
          </label>
        </form>
      </div>

      <SearchBtn fetchCity={fetchCity} inputCity={inputCity} />
    </div>
  );
}

export default SearchInput;
