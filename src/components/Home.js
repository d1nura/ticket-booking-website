import React, { useEffect, useContext } from "react";
// import ConcertItems from "./HomeComponent/ConcertItems";
// import SportsItem from "./HomeComponent/SportsItem";
// import ArtsItem from "./HomeComponent/ArtsItem";
// import FamilyItem from "./HomeComponent/FamilyItem";
import "../scss/home.scss";
import Context from "./Context";
import useHttp from "../hooks/http";
import GridContent from "../components/HomeComponent/GridContent";
import Loading from "./Loading";

function Home() {
  const [data, loading] = useHttp("events.json?", 20, 1);
  const context = useContext(Context);
  useEffect(() => {
    context.path = window.location.pathname;
  });
  const results = () => {
    return (
      <div className="Home">
        {/* <ConcertItems /> */}
        {/* <SportsItem />
        <ArtsItem />
        <FamilyItem /> */}
        {/* {data._embedded.events.map((item, index) => {
          return <p>{item.name}</p>;
        })} */}
        <GridContent data={data} />
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

export default Home;
