import React, { useContext } from "react";
import ConcertItems from "../components/ConcertItems";
import "../scss/home.scss";
import Context from "./Context";

function Home() {
  const context = useContext(Context);

  const results = () => {
    return (
      <div className="Home">
        <ConcertItems />
      </div>
    );
  };
  return results();
}

export default Home;
