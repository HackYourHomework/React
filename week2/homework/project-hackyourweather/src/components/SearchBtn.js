import React from 'react';

const SearchBtn = ({ fetchCity, inputCity }) => {
  return (
    <div>
      <button
        className="btn"
        type="submit"
        onClick={() => {
          fetchCity({ inputCity });
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBtn;
