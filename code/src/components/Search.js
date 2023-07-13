import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handlesearchText }) => {
  return (
    <div className="search">
      <MdSearch size="1.3em" className="search-icons"></MdSearch>
      <input
        type="text "
        onChange={(event) => handlesearchText(event.target.value)}
        placeholder="type to search....."
      />
    </div>
  );
};

export default Search;
