import React, { useContext, useEffect, useState } from "react";
import Context from "./Context";
import useHttp from "../hooks/http";
import "../scss/buyTickets.scss";
import dateConverter from "../hooks/date";
import timeConverter from "../hooks/time";
import minus from "../logo/minus.svg";
import plus from "../logo/plus-symbol.svg";
import stool from "../logo/stool.svg";
import tic from "../logo/access.svg";
import Loading from "./Loading";

function BuyTickets({ match }) {
  const context = useContext(Context);
  const [data, loading] = useHttp(`events/${match.params.id}.json?`, 1);
  const [itemCount, setItemCount] = useState(2);
  useEffect(() => {
    context.setDisplay(true);
  }, [context]);

  window.onpopstate = () => {
    context.setDisplay(false);
    console.log(context.display);
  };
  const addItem = () => {
    setItemCount(itemCount + 1);
  };
  const removeItem = () => {
    if (itemCount > 1) setItemCount(itemCount - 1);
  };
  const results = () => {
    return (
      <div className="buyTickets">
        <header>
          {/* <div
            id="headerPic"
            style={{ backgroundImage: `url('${data.images[0].url}')` }}
          /> */}
          <img alt="pic" src={data.images[0].url} />
          <div id="headerContent">
            <h2>{data.name}</h2>
            <div>
              <div id="ticDates">
                <p>{dateConverter(data.dates.start.localDate, "day")}</p>
                <span>&#183;</span>
                <p>{dateConverter(data.dates.start.localDate, "month")}</p>
                <span>&#183;</span>
                <p>
                  {data.dates.start.localTime
                    ? timeConverter(data.dates.start.localTime)
                    : ""}
                </p>
              </div>
              <div id="ticVenues">
                {data._embedded.venues[0].name}&nbsp;-&nbsp;
                {data._embedded.venues[0].city.name}
                ,&nbsp;
                {data._embedded.venues[0].state
                  ? data._embedded.venues[0].state.stateCode
                  : data._embedded.venues[0].country.countryCode}
              </div>
            </div>
          </div>
        </header>
        <div id="ticContent">
          <div id="seatMap">
            {data.seatmap ? (
              <img alt="seatmap" src={data.seatmap.staticUrl} />
            ) : (
              <div id="notFound">
                <img src={stool} alt="seat" />
                Seatmap not found
              </div>
            )}
          </div>
          <div id="price">
            <div id="priceContent">
              <div id="centerPrice">
                <img id="ticPic" src={tic} alt="tic" />
                <div id="priceTag">
                  <h3>Ticket Price</h3>
                  <p>
                    {data.priceRanges
                      ? (data.priceRanges[0].min * itemCount).toFixed(1)
                      : "0.00"}
                    {data.priceRanges ? data.priceRanges[0].currency : ""}
                  </p>
                </div>
                <div id="priceSelector">
                  <button onClick={removeItem}>
                    <img alt="minus" src={minus} />
                  </button>
                  <p>{itemCount}</p>
                  <button onClick={addItem}>
                    <img alt="plus" src={plus} />
                  </button>
                </div>
              </div>
              <div id="getTickets">
                <p>{itemCount} Tickets</p>
                <button>Get Tickets</button>
              </div>
            </div>
          </div>
        </div>
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

export default BuyTickets;
