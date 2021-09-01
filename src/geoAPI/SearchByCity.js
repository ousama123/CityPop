import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";

const url = "http://api.geonames.org/searchJSON?username=weknowit";

function SearchByCity() {
  const [data, setData] = useState([]);
  const [textValue, setTextValue] = useState("");

  const handleTextFieldChange = (e) => {
    setTextValue(e.target.value);
  };

  const checkMatch = () => {};

  useEffect(() => {
    //calling useEffect method on page load for fuctional components or componentDidMount() for class components
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      }, 2000);
  }, []);

  if (!data) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <h1>{textValue}</h1>
      <IconButton aria-label="search" onClick={() => checkMatch}>
        Search
      </IconButton>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="City"
        helperText="Must be filled out"
        value={textValue}
        onChange={handleTextFieldChange}
      />
      {textValue &&
        data.geonames?.map(
          (geo) =>
            geo.name.includes(textValue) && (
              <h5>
                Population of {geo.name} is {geo.population}
              </h5>
            )
        )}
    </div>
  );
}
export default SearchByCity;
