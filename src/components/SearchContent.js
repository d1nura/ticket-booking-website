import React, { useEffect, useContext } from "react";
import Context from "../components/Context";
import useHttp from "../hooks/http";
import BasicDropDown from "./BasicDropDown";
import "../scss/searchContent.scss";
import Loading from "./Loading";

function SearchContent() {
  const context = useContext(Context);
  const [data, loading] = useHttp(`events?keyword=${context.searchBarVal}&`);
  useEffect(() => {
    window.onpopstate = () => {
      context.setRes(false);
    };
    console.log(122);
  }, []);
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
    console.log(data);
    return results();
  } else {
    return <Loading />;
  }
}

export default SearchContent;
