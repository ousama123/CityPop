import React from "react";

import SearchAPI from "./SearchAPI";

function SearchByCity() {
  return (
    <div >
      <div>
        <SearchAPI
          handleClick="popResult"
          label="Enter a City"
          searchType="CITY"
        ></SearchAPI>
      </div>
    </div>
  );
}
export default SearchByCity;
