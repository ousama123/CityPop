import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  buttonStyle: {
    width: 300,
    height: 60,
    padding: 10,
    margin: 5,
    borderRadius: 3,
    border: 0,
  },
});

function CitiesList(props) {
  const history = useHistory();
  const classes = useStyles();
  let cities = props.location.state.cities
  let countryName =props.location.state.countryName

  //This method takes care of the navigation to the popResult page when one of the cities list is clicked.
  const handleButtonClick = (cityName, population) => {
    history.push(`/popResult/${cityName}/${population}`);
  };

  return (
    <div className="main">
        <div className="centered">
          <div className="countryResult">
            <h4>{countryName.toUpperCase()}</h4>
          </div>
          {/** This part is handling the cities list part. It shows the list of cities of the given country */}
          {cities.map((city, i) => (
            <div key={i} className="buttonList">
              <Button
                onClick={() => handleButtonClick(city.name, city.population)}
                classes={{
                  root: classes.buttonStyle,
                }}
                variant="contained"
                color="primary"
              >
                {city.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
  );
}

export default CitiesList;
