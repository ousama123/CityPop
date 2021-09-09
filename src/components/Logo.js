import React from "react";
import { useHistory } from "react-router-dom";
function Logo() {
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (
    <div className="logo">
      <h1 onClick={handleClick} >
        CityPop
      </h1>
    </div>
  );
}

export default Logo;
