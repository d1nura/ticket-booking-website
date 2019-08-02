import React from "react";
import GridContent from "./GridContent";
import useHttp from "../../hooks/http";
import ReactDelayRender from "react-delay-render";

function SportsItem() {
  const [data, loading] = useHttp("events.json?keyword=sports&", 6);

  const results = () => {
    return <GridContent name="Sports" data={data} />;
  };

  if (!loading && data) {
    console.log(data);
    return results();
  } else {
    return <p>loading...</p>;
  }
}

export default ReactDelayRender({ delay: 1000 })(SportsItem);
