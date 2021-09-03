import React from "react";

function PopResult(props) {
  return (
    <div className="main">
      <div className="container">
        <div className="centered">
          <h4>{props.location.state.valueInput}</h4>
          <div className="population">
            <div>Population</div>
            <h2>{props.location.state.populationResult}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopResult;
