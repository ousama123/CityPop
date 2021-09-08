import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  buttonStyle: {
    width: 200,
    height: 80,
    padding: 20,
    margin: 20,
    borderRadius: 3,
    border: 0,
  },
});

function CitiesList(props) {
  const history = useHistory();
  const classes = useStyles();
  let cities = props.match.params.cities;
  let countryName = props.match.params.countryName;

  //This method takes care of the navigation to the popResult page when one of the cities list is clicked.
  const handleButtonClick = (cityName, population) => {
    history.push(`/popResult/${cityName}/${population}`);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="centered">
          <div className="cityResult">
            <h4>{countryName}</h4>
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
    </div>
  );
}

export default CitiesList;
