import React, { useEffect, useContext } from "react";
import Context from "../components/Context";
import useHttp from "../hooks/http";
import BasicDropDown from "./BasicDropDown";
import "../scss/searchContent.scss";
import Loading from "./Loading";

function SearchContent({ match }) {
  const context = useContext(Context);
  const [data, loading] = useHttp(`events?keyword=${match.params.name}&`);
  useEffect(() => {
    window.onpopstate = () => {
      context.setRes(false);
    };
  }, [context]);
  const results = () => {
    return (
      <div className="searchContent">
        {data._embedded ? (
          data._embedded.events.map((item, index) => {
            return <BasicDropDown item={item} key={index} />;
          })
        ) : (
          <p>no results found!</p>
        )}
      </div>
    );
  };
  if (data && !loading) {
    return results();
  } else {
    return <Loading />;
  }
}

export default SearchContent;
