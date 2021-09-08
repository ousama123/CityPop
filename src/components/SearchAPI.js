import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { IconButton, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

//styling the buttons
const useStyles = makeStyles({
  buttonStyle: {
    width: 300,
    height: 40,
    padding: 10,
    margin: 5,
    borderRadius: 3,
    border: 0,
  },
});

function SearchAPI(props) {
  const classes = useStyles();
  const [textValue, setTextValue] = useState("");
  const [cities, setCities] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchMessage, setSearchMessage] = useState("");
  const history = useHistory();
  console.log(props);
  const searchType = props.match.params.searchType; //get the searchType from each component to show the related page(city or country)


  //This method takes care of the navigation to the popResult page when one of the cities list is clicked.
  const handleButtonClick = (population, cityName) => {
    history.push(`/popResult/${cityName}/${population}`);
  };

  function handleClick(e) {
    if (textValue === "") setErrorMessage("Please enter a value");
    else if (searchType === "city") {
      searchByCity(e);
    } else {
      searchByCountry(e);
    }
  }

  //this method takes care of the search by city part
  const searchByCity = (e) => {
    e.preventDefault();
    setSearchMessage("Searching...");
    let url = `http://api.geonames.org/searchJSON?name_equals=${textValue}&featureClass=P&maxRows=1&username=weknowit`;
    axios
      .get(url)
      .then((response) => {
        let res = response.data.geonames;
        console.log(res[0]);
        res.length !== 0
          ? history.push(`/popResult/${res[0].name}/${res[0].population}`) // res[0] is for accessing the first index of the array which contains the first row of the data(maxRows=1)
          : setErrorMessage("No cities found!");
      })
      .catch((error) => alert(error));
  };

  //this method takes care of the search by country part
  const searchByCountry = (e) => {
    setSearchMessage("Searching...");
    let url = `http://api.geonames.org/searchJSON?q=${textValue}&featureCode=PPLA&featureCode=PPLC&orderby=population&maxRows=3&username=weknowit`;
    axios
      .get(url)
      .then((response) =>
        response.data.geonames.length !== 0
          ? setCities(response.data.geonames)
          : setErrorMessage("No countries found!")
      )
      .catch((error) => alert(error));
  };

  return (
    <div className="main">
      <div className="container">
        <div className="centered">
          <p>SEARCH BY {searchType.toUpperCase()}</p>
          <TextField
            className="input"
            color="primary"
            id="outlined-basic"
            variant="outlined"
            label={`Enter a ${searchType}`}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <div>
            <IconButton
              onClick={(e) => handleClick(e)}
              color="primary"
              aria-label="search"
            >
              <SearchIcon className="searchButton" fontSize="large" />
            </IconButton>
          </div>
          <p className="errorMessage">{errorMessage}</p>
          {/** This part is handling the cities list part. It shows the list of cities of the given country */}
          {cities.length !== 0 ? (
            cities.map((city, i) => (
              <div key={i} className="buttonList">
                <Button
                  onClick={() => handleButtonClick(city.population, city.name)}
                  classes={{
                    root: classes.buttonStyle,
                  }}
                  variant="contained"
                  color="primary"
                >
                  {city.name}
                </Button>
              </div>
            ))
          ) : (
            <div>
              {searchMessage && (
                <p className="searchMessage">{searchMessage}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchAPI;
