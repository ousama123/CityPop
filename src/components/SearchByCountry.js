import React from "react";
import SearchAPI from "./SearchAPI";

function SearchByCountry() {
  return (
    <div >
      <SearchAPI
        handleClick="citiesByCountry"
        label="Enter a Country"
        searchType="COUNTRY"
      ></SearchAPI>
    </div>
  );
}

export default SearchByCountry;
