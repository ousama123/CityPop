import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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

function WelcomePage() {
  let history = useHistory();

  const nav = (path) => {
    history.push(path);
  };

  const classes = useStyles();
  return (
    <div>
      <Button
        onClick={() => nav("/SearchByCity")}
        classes={{
          root: classes.buttonStyle,
        }}
        className="welcomeButton"
        variant="contained"
        color="secondary"
      >
        SEARCH BY CITY
      </Button>
      <Button
        onClick={() => nav("/SearchByCountry")}
        classes={{
          root: classes.buttonStyle,
        }}
        className="welcomeButton"
        variant="contained"
        color="secondary"
      >
        SEARCH BY COUNTRY
      </Button>
    </div>
  );
}

export default WelcomePage;
