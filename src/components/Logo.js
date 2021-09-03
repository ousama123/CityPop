import React from "react";
import { withRouter } from "react-router-dom";

function Logo() {
  return (
    <div className="container">
      <h1 className="logo">CityPop</h1>
    </div>
  );
}

export default withRouter(Logo);
