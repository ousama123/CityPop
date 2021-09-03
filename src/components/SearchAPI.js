import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

function SearchAPI(props) {
  const [data, setData] = useState([]);
  const [textValue, setTextValue] = useState();
  const [population, setPopulation] = useState(5);
  const [cities, setCities] = useState([]);
  const [noMatch, setNoMatch] = useState("");
  const history = useHistory();

  const handleTextFieldChange = (e) => {
    const value = e.target.value;
    setTextValue(value);
  };

  const search = () => {
    return (
      <div>
        {textValue &&
          data.geonames?.map((geo) => {
            if (geo.name.includes(textValue)) {
              return <h5>{geo.population}</h5>;
            }
          })}
      </div>
    );
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

  function handleClick(path) {
    // a method that handle the navigatiuon to another page
    history.push({
      pathname: path,
      state: {
        valueInput: textValue,
        populationResult: population,
        noMatchFound: noMatch,
      },
    });
    {
      /**handle no input error */
    }
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
            color="primary"
            id="outlined-basic"
            variant="outlined"
            label={props.label}
            value={textValue}
            onChange={handleTextFieldChange}
          />
          <div>
            <IconButton
              onClick={() => handleClick(props.handleClick)}
              color="primary"
              aria-label="search"
            >
              <SearchIcon fontSize="large" />
            </IconButton>
          </div>
          {search()}
        </div>
      </div>
    </div>
  );
}

export default SearchAPI;
