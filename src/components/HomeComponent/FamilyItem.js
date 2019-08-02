import React from "react";
import useHttp from "../../hooks/http";
import "../../scss/concertItems.scss";
import GridContent from "./GridContent";
import ReactDelayRender from "react-delay-render";

function FamilyItem() {
  const [data, loading] = useHttp("events.json?ClassificationName=family&", 6);

  const results = () => {
    // return <p>sdfs</p>;
    return <GridContent name="Family" data={data} />;
  };

  if (!loading && data) {
    console.log(data);
    return results();
  } else {
    return <p>loading...</p>;
  }
}

export default ReactDelayRender({ delay: 6000 })(FamilyItem);
