import React, { useState } from "react";
import "../scss/toTop.scss";
import arrow from "../logo/downarrow1.svg";

function ToTop() {
  const [btnShow, setBtnShow] = useState(false);
  document.onscroll = () => {
    if (window.pageYOffset > 200) {
      setBtnShow(true);
    } else {
      setBtnShow(false);
    }
  };
  const bringToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="ToTop">
      <button
        onClick={bringToTop}
        id="topBtn"
        style={btnShow ? { display: "block" } : {}}
      >
        <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
}

export default ToTop;
