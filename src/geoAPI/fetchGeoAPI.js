import react, { useState, useEffect } from "react";
import TextFieldAPI from "./TextFieldAPI";
import ButtonAPI from "./ButtonAPI";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

const url = "http://api.geonames.org/searchJSON?username=weknowit";

function FetchGeoAPI() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };
  useEffect(() => {
    //calling useEffect method on page load for fuctional components or componentDidMount() for class components
  }, []);

  /**  if (data) {
    data.map((item) => {
      return <li>{item}</li>;
    });
  } */

  return (
    <div>
      <Button onClick={getData}>getData</Button>
      <TextFieldAPI></TextFieldAPI>
      {data?.geonames?.map((geo) => {
        return (
          <div>
            <h5>{geo.name}</h5>
            <h5>{geo.population}</h5>
          </div>
        );
      })}
    </div>
  );
}
export default FetchGeoAPI;
