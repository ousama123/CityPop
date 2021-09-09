import React from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage.js";
import CitiesList from "./components/CitiesList";
import PopResult from "./components/PopResult";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Logo from "./components/Logo";
import SearchAPI from "./components/SearchAPI";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Logo />
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/search/:searchType" component={SearchAPI} />
          <Route exact path="/citiesList" component={CitiesList} />
          <Route
            exact
            path="/popResult/:name/:population"
            component={PopResult}
          />
        </Switch>


      </BrowserRouter>


    );
  }
}

export default App;
