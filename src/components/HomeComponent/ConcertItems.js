import React from "react";
import useHttp from "../../hooks/http";
import "../../scss/concertItems.scss";
import GridContent from "./GridContent";
import Loading from "../Loading";

function ConcertItems() {
  const [data, loading] = useHttp("events.json?");
  const results = () => {
    return (
      <React.Fragment>
        <GridContent name="Concerts" data={data._embedded.events} />
        {/* <GridContent name="Concerts" data={data._embedded.venues} /> */}
      </React.Fragment>
    );
  };

  if (!loading && data) {
    console.log(data._embedded);
    return results();
  } else {
    return <Loading />;
  }
}
export default ConcertItems;
