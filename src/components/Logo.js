import React from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
function Logo(props) {
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (
    <div className="logoMain">
      <h1 onClick={handleClick} className="logo">
        CityPop
      </h1>
    </div>
  );
}

export default withRouter(Logo);
