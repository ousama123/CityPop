import React, { useState, useEffect } from "react";

import SearchAPI from "./SearchAPI";

function SearchByCity() {
  return (
    <div>
      <SearchAPI label="Enter a City" searchType="CITY"></SearchAPI>
    </div>
  );
}
export default SearchByCity;
