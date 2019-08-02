import React from "react";
import useHttp from "../../hooks/http";
import "../../scss/concertItems.scss";
import GridContent from "./GridContent";
import ReactDelayRender from "react-delay-render";

function ArtsItem() {
  const [data, loading] = useHttp(
    "events.json?ClassificationName=arts&theatre&",
    6
  );

  const results = () => {
    // return <p>sdfs</p>;
    return <GridContent name="Arts & Theatre" data={data} />;
  };

  if (!loading && data) {
    console.log(data);
    return results();
  } else {
    return <p>loading...</p>;
  }
}

export default ReactDelayRender({ delay: 5000 })(ArtsItem);
