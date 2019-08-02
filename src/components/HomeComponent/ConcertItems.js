import React from "react";
import useHttp from "../../hooks/http";
import "../../scss/concertItems.scss";
import GridContent from "./GridContent";

function ConcertItems() {
  const [data, loading] = useHttp("events.json?keyword=concerts&", 6, 1);

  const results = () => {
    return <GridContent name="Concerts" data={data} />;
  };

  if (!loading && data) {
    console.log(data);
    return results();
  } else {
    return <p>loading...</p>;
  }
}
export default ConcertItems;
