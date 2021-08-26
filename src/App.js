import react from "react";
import "./App.css";
import FetchGeoAPI from "./geoAPI/FetchGeoAPI";
class App extends react.Component {
  render() {
    return (
      <div className="App">
        <FetchGeoAPI></FetchGeoAPI>
      </div>
    );
  }
}

export default App;
