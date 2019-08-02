import React, { useEffect } from "react";

function SearchItems(props) {
  const results = () => {
    return (
      <div className="searchResults">
        {props.data._embedded && props.name !== "" && showSearch ? (
          props.data._embedded.events.slice(0, 5).map((item, index) => {
            return <p key={index}>{item.name}</p>;
          })
        ) : (
          <p>Nothing found!</p>
        )}
      </div>
    );
  };
  if (props.data) {
    return results();
  } else {
    return <p>los,,,</p>;
  }
}

export default SearchItems;
