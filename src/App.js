import react from "react";
import "./App.css";
import FetchGeoAPI from "./geoAPI/FetchGeoAPI";
import WelcomePage from "./geoAPI/WelcomePage.js";
class App extends react.Component {
  render() {
    return (
      <div className="App">
        <h1>CityPop</h1>
        <WelcomePage></WelcomePage>
      </div>
    );
  }
}

export default App;
