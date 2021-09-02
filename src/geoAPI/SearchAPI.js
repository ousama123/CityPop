import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
const url = "http://api.geonames.org/searchJSON?username=weknowit";

function SearchAPI(props) {
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
    <div className="wrapper">
      <p>SEARCH BY {props.searchType}</p>
      <IconButton
        color="secondary"
        aria-label="search"
        onClick={() => checkMatch}
      >
        <SearchIcon fontSize="large" />
      </IconButton>
      <TextField
        color="secondary"
        id="outlined-basic"
        variant="outlined"
        label={props.label}
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

export default SearchAPI;
