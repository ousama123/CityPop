import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  buttonStyle: {
    width: 220,
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
    
        <div className="centered">
          <div className="welcomeButtons">
            <Link style={{ textDecoration: "none" }} to="/search/city">
              <Button
                classes={{
                  root: classes.buttonStyle,
                }}
                variant="contained"
                color="primary"
              >
                SEARCH BY CITY
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/search/country">
              <Button
                classes={{
                  root: classes.buttonStyle,
                }}
                variant="contained"
                color="primary"
              >
                SEARCH BY COUNTRY
              </Button>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default WelcomePage;
