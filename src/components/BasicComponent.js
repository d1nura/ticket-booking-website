import React from "react";
import useHttp from "../hooks/http";
import BasicDropDown from "./BasicDropDown";
import "../scss/concerts.scss";
import Loading from "./Loading";

function BasicComponent(props) {
  const [data, loading] = useHttp(
    `events.json?classificationName=${props.name}&`,
    props.size,
    props.page
  );
  const results = () => {
    return (
      <div className="Concerts">
        {data._embedded
          ? data._embedded.events.map((item, index) => {
              return <BasicDropDown key={index} item={item} />;
            })
          : "Please try again."}
      </div>
    );
  };

  if (data && !loading) {
    return results();
  } else {
    return <Loading />;
  }
}

export default BasicComponent;
