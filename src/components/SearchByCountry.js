import React from "react";
import SearchAPI from "./SearchAPI";

function SearchByCountry() {
  return (
    <div>
      <SearchAPI label="Enter a Country" searchType="country"></SearchAPI>
    </div>
  );
}

export default SearchByCountry;
