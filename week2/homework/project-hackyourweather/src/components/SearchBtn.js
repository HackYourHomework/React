import React from 'react';

const SearchBtn = ({ fetchCity, inputCity }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  console.log(inputCity);
  return (
    <div>
      <button
        // onSubmit={handleSubmit}
        className="btn"
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
          fetchCity({ inputCity });
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBtn;
