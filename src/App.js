import React from "react";
import "./App.css";
import WelcomePage from "./geoAPI/WelcomePage.js";
import SearchByCity from "./geoAPI/SearchByCity";
import SearchByCountry from "./geoAPI/SearchByCountry";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/searchByCity" component={SearchByCity} />
          <Route exact path="/searchByCountry" component={SearchByCountry} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
