import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

function SearchAPI(props) {
  const [data, setData] = useState([]);
  const [textValue, setTextValue] = useState("");
  const handleTextFieldChange = (e) => {
    setTextValue(e.target.value);
  };

  useEffect(() => {
    //calling useEffect method on page load for fuctional components or componentDidMount() for class components
    const url = "http://api.geonames.org/searchJSON?username=weknowit";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      }, 2000);
  }, []);
  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }
  if (!data) {
    return <div>Loading..</div>;
  }

  return (
    <div className="main">
      <div className="container">
        <div className="centered">
          <p>SEARCH BY {props.searchType}</p>
          <TextField
            color="secondary"
            id="outlined-basic"
            variant="outlined"
            label={props.label}
            helperText="Must be filled out"
            value={textValue}
            onChange={handleTextFieldChange}
          />
          <div>
            <IconButton
              onClick={() => handleClick(props.handleClick)}
              color="secondary"
              aria-label="search"
            >
              <SearchIcon fontSize="large" />
            </IconButton>
          </div>

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
      </div>
    </div>
  );
}

export default SearchAPI;
