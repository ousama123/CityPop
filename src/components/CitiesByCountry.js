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

  const handleClick = (e, push, population) => {
    //navigate to citiesByCountry page
    history.push({
      pathname: push,
      state: {
        population,
        valueInput,
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
              (x, i) => (
                <div className="buttonList">
                  <Button
                    onClick={(e) => handleClick(e, "PopResult", x.population)}
                    classes={{
                      root: classes.buttonStyle,
                    }}
                    key={i}
                    variant="contained"
                    color="primary"
                  >
                    {x.name}
                  </Button>
                </div>
              )
            )
          ) : (
            <p className="fs-3 mt-3">City list is empty!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CitiesByCountry;
