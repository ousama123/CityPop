import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

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

function CitiesByCountry(props) {
  let cities = props.location.state.citiesList;
  let valueInput = props.location.state.valueInput;
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (e, push, population, cityName) => {
    //navigate to citiesByCountry page
    history.push({
      pathname: push,
      state: {
        population,
        valueInput: cityName,
      },
    });
  };

  return (
    <div className="main">
      <div className="container">
        <div className="centered">
          <div>
            <h4>{props.location.state.valueInput}</h4>
          </div>
          {cities.length !== 0 ? (
            cities.slice(0, 5).map(
              //taking only 5 cities of the cities list
              (city, i) => (
                <div className="buttonList">
                  <Button
                    onClick={(e) =>
                      handleClick(e, "PopResult", city.population, city.name)
                    }
                    classes={{
                      root: classes.buttonStyle,
                    }}
                    key={i}
                    variant="contained"
                    color="primary"
                  >
                    {city.name}
                  </Button>
                </div>
              )
            )
          ) : (
            <p className="errorMessage">City list is empty!</p> //if the country is existed but has no city list fetched from the API-call
          )}
        </div>
      </div>
    </div>
  );
}

export default CitiesByCountry;
