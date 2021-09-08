import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import axios from "axios";

function SearchAPI(props) {
  const [textValue, setTextValue] = useState("");
  const [cities, setCities] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchMessage, setSearchMessage] = useState("");
  const history = useHistory();
  console.log(props);
  const searchType = props.match.params.searchType; //get the searchType from each component to show the related page(city or country)

  function handleClick(e) {
    if (!textValue) setErrorMessage("Please enter a value");
    else {
      if (searchType === "city") {
        searchByCity(e);
      } else {
        searchByCountry(e);
      }
    }
  }

  //this method takes care of the search by city part
  const searchByCity = (e) => {
    e.preventDefault();
    setSearchMessage("Searching...");
    //featureClass=P means that the order is related to a city/village
    //maxrows=1 means that we fetch only the first value of the array which should be the most related value
    let url = `http://api.geonames.org/searchJSON?name_equals=${textValue}&maxRows=1&featureClass=P&username=weknowit`;
    axios
      .get(url)
      .then((response) => {
        let res = response.data.geonames;
        if (res.length !== 0) {
          //if fetching the data is a success
          // res[0] is for accessing the first index of the array which contains the first row of the data(maxRows=1)
          history.push(`/popResult/${res[0].name}/${res[0].population}`);
        } else {
          setErrorMessage("No such city found!");
        }
      })
      .catch((error) => alert(error)); //catching an error if there is no data response
  };

  //this method takes care of the search by country part
  const searchByCountry = (e) => {
    setSearchMessage("Searching...");
    //featureCode=PPLA means that the order is done by a seat of a first-order administrative division
    //featureCode=PPLC means that the capitales are ordered first
    let url = `http://api.geonames.org/searchJSON?q=${textValue}&orderby=population&maxRows=3&featureCode=PPLC&featureCode=PPLA&username=weknowit`;
    axios
      .get(url)
      .then((response) => {
        let res = response.data.geonames;
        console.log(res);
        console.log(res);
        console.log(res);

        if (res.length !== 0) {
          setCities(res);
          history.push(`/citiesList/${cities}/${res[0].countryName}`);
        } else {
          setErrorMessage("No countries found!");
        }
      })
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
            <div>should be citiesList Page </div>
          ) : (
            <div>
              {!errorMessage && (
                <div>
                  <p className="searchMessage">{searchMessage}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchAPI;
