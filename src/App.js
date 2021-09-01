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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1>CityPop</h1>
          <WelcomePage />
        </div>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/SearchByCity" component={SearchByCity} />
          <Route exact path="/SearchByCountry" component={SearchByCountry} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
