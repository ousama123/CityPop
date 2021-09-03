import React from "react";

function CitiesByCountry(props) {
  return (
    <div className="main">
      <div className="container">
        <div className="centered">
          <p>{props.location.state.valueInput}</p>
          <div>{/**list of buttons of the cities */}</div>
        </div>
      </div>
    </div>
  );
}

export default CitiesByCountry;
