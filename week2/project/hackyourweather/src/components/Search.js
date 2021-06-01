import React, { useState } from 'react';

const Search = ({ getCity }) => {
  const [input, setInput] = useState('');
  return (
    <div>
      <input
        value={input}
        onInput={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search City"
      />
      <button onClick={getCity(input)}>Search</button>
    </div>
  );
};

export default Search;
