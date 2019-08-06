import React from "react";
import loading from "../logo/rolling.svg";
import "../scss/loading.scss";

function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="loading" />
    </div>
  );
}

export default Loading;
