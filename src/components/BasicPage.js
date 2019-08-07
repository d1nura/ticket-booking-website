import React, { useState } from "react";
import "../scss/basicComponent.scss";
import BasicComponent from "./BasicComponent";

function BasicPage(props) {
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState([1]);
  const [name, setName] = useState(props.pageName);

  const loadMore = () => {
    setPage(page + 1);
    setArr([...arr, page]);
  };
  const handleChange = e => {
    setName(e.target.value);
    setArr([1]);
    console.log(e.target.value);
  };
  return (
    <div className="basicComponent">
      <h2>All {name ? name : props.pageName} Events</h2>
      <select onChange={handleChange}>
        <option defaultValue={props.pageName}>
          All {props.pageName} Events
        </option>
        {props.optionsArr.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      {arr.map((item, index) => {
        return <BasicComponent name={name} key={item} size="10" page={index} />;
      })}
      <button id="loadMore" onClick={loadMore}>
        Load More
      </button>
    </div>
  );
}

export default BasicPage;
