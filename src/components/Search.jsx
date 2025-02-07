import React from "react";

const Search = ({ Search, setSearch }) => {
  const handleSearch = (value) => {
    setSearch(value);
  };
  return (
    <div className="search">
      <input
        type="text"
        value={Search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
