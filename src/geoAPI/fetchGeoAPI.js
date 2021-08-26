import react, { useState, useEffect } from "react";

const url =
  "http://api.geonames.org/searchJSON?q=london&maxRows=10&style=LONG&lang=es&username=weknowit";

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
      <h1>CityPop</h1>
      <button onClick={getData}>getData</button>
      <br />
       <pre>{JSON.stringify(data.geonames, null, 2)}</pre>
    </div>
  );
}
export default FetchGeoAPI;
