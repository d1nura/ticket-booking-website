import React, { useContext, useEffect } from "react";
import useHttp from "../hooks/http";
import { Link } from "react-router-dom";
import Context from "./Context";
import load from "../logo/rolling1.svg";

function SearchResults(props) {
  const [data, loading] = useHttp(`events?keyword=${props.name}&`);

  useEffect(() => {
    console.log(props.name);
  }, [props.name]);

  const context = useContext(Context);
  const setSearchName = e => {
    context.setSearchBarVal(e.target.innerText);
  };
  const results = () => {
    return (
      <div
        className={
          props.nav || props.homeNav ? "searchResultsSmall" : "searchResults"
        }
        style={props.removeResults || props.name === "" ? { height: 0 } : {}}
      >
        {data._embedded && props.name !== "" ? (
          data._embedded.events.slice(0, 5).map((item, index) => {
            return (
              <Link
                to={`/results/${item.name}`}
                key={index}
                onClick={setSearchName}
              >
                <p id="searchP">{item.name}</p>
              </Link>
            );
          })
        ) : (
          <p id="searchP">Nothing found!</p>
        )}
      </div>
    );
  };

  if (data && !loading) {
    return results();
  } else {
    console.log("loddddd.....");
    return (
      <img
        style={{ width: 4 + "vw", position: "absolute", right: 1 + "px" }}
        src={load}
        alt="loading..."
      />
    );
  }
}

export default SearchResults;
