import React from "react";

function PopResult(props) {


  console.log(props);
  return (
    <div className="main">
      <div className="container">
        <div className="centered">
          <div className="cityResult">
            <h4>{props.match.params.name}</h4>
          </div>
          <div className="population">
            <div>Population</div>
            <h2>{props.match.params.population}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopResult;
