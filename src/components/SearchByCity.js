import React from "react";

import SearchAPI from "./SearchAPI";

function SearchByCity() {
  return (
    <div >
      <div>
        <SearchAPI
          label="Enter a City"
          searchType="city"
        ></SearchAPI>
      </div>
    </div>
  );
}
export default SearchByCity;
