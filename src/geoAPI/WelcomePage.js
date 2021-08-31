import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const navigateToCityPage = () => {};
const navigateToCountryPage = () => {};

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
  const classes = useStyles();
  return (
    <div>
      <Button
        onClick={navigateToCityPage}
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
        onClick={navigateToCountryPage}
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
