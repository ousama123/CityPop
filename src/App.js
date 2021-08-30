import react from "react";
import "./App.css";
import FetchGeoAPI from "./geoAPI/FetchGeoAPI";
class App extends react.Component {
  render() {
    return (
      <div className="App">
         <h1>CityPop</h1>
        <FetchGeoAPI></FetchGeoAPI>
      </div>
    );
  }
}

export default App;
