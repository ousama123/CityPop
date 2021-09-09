import React from "react";

function PopResult(props) {
  let population = props.match.params.population;
  let cityName = props.match.params.name;
  return (
    <div className="main">
      <div className="centered">
        <div className="cityResult">
          <h4>{cityName.toUpperCase()}</h4>
        </div>
        <div className="population">
          <div className="popRes" >POPULATION</div>
          <h2>{population}</h2>
        </div>
      </div>
    </div>
  );
}

export default PopResult;
