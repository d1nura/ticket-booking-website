import React, { useContext } from "react";
import "../../scss/gridStyles.scss";
import imgUrl from "../../hooks/imgUrl";
import { Link } from "react-router-dom";
import Context from "../Context";

function GridContent(props) {
  const context = useContext(Context);
  const setNavbar = () => {
    context.setDisplay(true);
  };
  console.log(props);
  return (
    <div className="gridItems">
      <div id="sixGrid">
        {props.data.map((item, index) => {
          return (
            <div key={index} id="cItem">
              <Link to={`/buy/${item.id}`} onClick={setNavbar}>
                <div
                  id="gridPic"
                  style={{ backgroundImage: `url('${imgUrl(item)}')` }}
                />
                <p>{item.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GridContent;
