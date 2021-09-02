import React from "react";
import "./App.css";
import WelcomePage from "./geoAPI/WelcomePage.js";
import SearchByCity from "./geoAPI/SearchByCity";
import SearchByCountry from "./geoAPI/SearchByCountry";
import PopResult from "./geoAPI/PopResult";
import CitiesByCountry from "./geoAPI/CitiesByCountry";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/searchByCity" component={SearchByCity} />
          <Route exact path="/searchByCountry" component={SearchByCountry} />
          <Route exact path="/citiesByCountry" component={CitiesByCountry} />
          <Route exact path="/popResult" component={PopResult} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
