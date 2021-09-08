import React from "react";

function PopResult(props) {
  let population = props.match.params.population;
  let cityName = props.match.params.name;
  console.log(props);
  return (
    <div className="main">
      <div className="container">
        <div className="centered">
          <div className="cityResult">
            <h4>{cityName}</h4>
          </div>
          <div className="population">
            <div>Population</div>
            <h2>{population}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopResult;
