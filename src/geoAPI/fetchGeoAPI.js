import react, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";

const url = "http://api.geonames.org/searchJSON?username=weknowit";

function FetchGeoAPI() {
  const [data, setData] = useState([]);
  const [textValue, setTextValue] = useState("");

  const handleTextFieldChange = (e) => {
    setTextValue(e.target.value);
  };

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      }, 2000);
  };
  useEffect(() => {
    //calling useEffect method on page load for fuctional components or componentDidMount() for class components
  }, []);
  if (!data) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <h1>{textValue}</h1>
      <IconButton aria-label="search" onClick={getData}>Search</IconButton>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="City"
        helperText="Must be filled out"
        value={textValue}
        onChange={handleTextFieldChange}
      />
      {data.geonames?.map((geo) => {
        if (textValue === geo.name) {
          return (
            <div>
              <h5>{geo.population}</h5>
            </div>
          );
        } 
          return <div>City not found!</div>;
      })}
    </div>
  );
}
export default FetchGeoAPI;
