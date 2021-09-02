import React from "react";

function PopResult(props) {
  return (
    <div className="main">
      <div className="container">
        <div className="centered">
          <p>CityName</p>
          <div className="population">
            <p>Population</p>
            <div className="result">{props.result}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopResult;
