import React from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage.js";
import SearchByCity from "./components/SearchByCity";
import SearchByCountry from "./components/SearchByCountry";
import PopResult from "./components/PopResult";
import CitiesByCountry from "./components/CitiesByCountry";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Logo from "./components/Logo";

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
        <Logo/>
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
