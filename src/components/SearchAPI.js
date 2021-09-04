import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import axios from "axios";
function SearchAPI(props) {
  const [data, setData] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [cities, setCities] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const searchType = props.searchType.toUpperCase(); //get the searchType from each component to show the related page(city or country)

  const handleTextFieldChange = (e) => {
    const value = e.target.value;
    setTextValue(value);
  };

  useEffect(() => {
    //calling useEffect method on page load for fuctional components or componentDidMount() for class components
    const url = "http://api.geonames.org/searchJSON?username=weknowit";
    axios
      .get(url)
      .then((response) => setData(response.data.geonames))
      .catch((error) => alert(error));
  }, []);
  console.log(data);

  function handleClick(e) {
    if(textValue === "")
    setErrorMessage("Please enter a value")
    else if (searchType === "CITY") {
      //handle the searchByCity part
      let index = data.findIndex((x) => x.name === textValue); //get the index of the wanted city
      if (index !== -1) {
        let name = data[index].name;
        let population = data[index].population;
        history.push({
          //navigate to popResult page
          pathname: "popResult",
          state: {
            //send current states to next page to handle
            valueInput: name,
             population,
          },
        });
      } else {
        //if there is no such city index
        setErrorMessage("No such city found!");
      }
    } else {
      //searchType === "COUNTRY"
      //handle the searchByCountry part
      let res = data.filter((country) => country.countryName === textValue);
      res.length !== 0 ? setCities(res) : setErrorMessage("No such country found!");
      history.push({
        //navigate to citiesByCountry page
        pathname: "citiesByCountry",
        state: {
          //send current states to next page to handle
          citiesList: res,
          valueInput: textValue,
      
        },
      });
    }
  }
  if (!data) {
    return <div>Loading..</div>;
  }

  return (
    <div className="main">
      <div className="container">
        <div className="centered">
          <p>SEARCH BY {searchType}</p>
          <TextField
          className="input"
            color="primary"
            id="outlined-basic"
            variant="outlined"
            label={props.label}
            value={textValue}
            onChange={handleTextFieldChange}
          />
          <div>
            <IconButton
         
              onClick={(e) => handleClick(e)}
              color="primary"
              aria-label="search"
            >
              <SearchIcon   className="searchButton" fontSize="large" />
            </IconButton>
          </div>
          <p className="errorMessage">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchAPI;
