import React from "react";
import SearchBar from "./SearchBar";
import data from "../../../../databases/data.json";

function Search() {
  return <SearchBar placeholder="Search product item..." data={data} />
}

export default Search;
