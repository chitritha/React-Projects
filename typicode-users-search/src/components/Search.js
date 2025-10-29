import React from 'react';

const Search = ({ searchText, onChangeHandler }) => {
  return (
    <div className="SearchBox">
      <input
        type="text"
        value={searchText}
        onChange={onChangeHandler}
        placeholder="Enter username"
      />
    </div>
  );
};

export default Search;
