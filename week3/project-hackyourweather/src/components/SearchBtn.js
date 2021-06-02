import React from 'react';

const SearchBtn = ({ fetchCity, inputCity }) => {
  return (
    <div>
      <button
        className="btn"
        type="submit"
        value={inputCity}
        onClick={(value) => {
          if (value) {
            fetchCity({ inputCity });
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBtn;
