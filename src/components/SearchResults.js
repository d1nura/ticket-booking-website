import React, { useContext } from "react";
import useHttp from "../hooks/http";
import { Link } from "react-router-dom";
import Context from "./Context";
import loading from "../logo/load.svg";

function SearchResults(props) {
  const [data, loading] = useHttp(`events?keyword=${props.name}&`);
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
        style={props.removeResults ? { height: 0 } : {}}
      >
        {data._embedded && props.name !== "" ? (
          data._embedded.events.slice(0, 5).map((item, index) => {
            return (
              <Link to="/results" key={index} onClick={setSearchName}>
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

  if (data && !loading && props.name !== "") {
    return results();
  } else {
    if (props.name === "") {
      return <p />;
    } else {
      console.log("loading...");
      return (
        <div id="loading search">
          <img src={loading} alt="laoding.." />
        </div>
      );
    }
  }
}

export default SearchResults;
