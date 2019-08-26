import React, { useState, useEffect, useContext } from "react";
import "../scss/dropdownItems.scss";
import downArrow from "../logo/downarrow.svg";
import dateConverter from "../hooks/date";
import timeConverter from "../hooks/time";
import location from "../logo/location.svg";
import { Link } from "react-router-dom";
import Context from "./Context";
import cancel from "../logo/cancel.svg";

const BasicDropDown = props => {
  const [show, setShow] = useState(false);
  const [more, setMore] = useState(false);
  const [showMoreLineUp, setShowMoreLineUp] = useState(false);
  const context = useContext(Context);
  // let emb = props.item._embedded;

  useEffect(() => {
    if (props.item._embedded) {
      if (
        props.item._embedded.attractions &&
        props.item._embedded.attractions.length < 4
      ) {
        setMore(true);
      } else {
        setMore(false);
      }
    }
  }, [props.item._embedded]);

  const showDropDown = () => {
    setTimeout(() => {
      show ? setShow(false) : setShow(true);
    }, 200);
  };

  const setNavbar = () => {
    context.setDisplay(true);
  };
  const moreLineup = () => {
    setShowMoreLineUp(true);
  };
  const hideMoreLineup = () => {
    setShowMoreLineUp(false);
  };
  const setSearchName = e => {
    context.setSearchBarVal(e.target.innerText);
  };

  return (
    <div className="mainHolder" id={show ? "showBoxShadow" : ""}>
      <div id="dropDown">
        <div id="mainDetails" onClick={showDropDown}>
          <div id="downIcon">
            <img
              src={downArrow}
              alt="down"
              className={show ? "rotateBtn" : ""}
            />
          </div>
          <div id="venueDate">
            <p id="mainDate">
              {dateConverter(props.item.dates.start.localDate, "month")}
            </p>
            <div id="day-time">
              <p id="day">
                {dateConverter(props.item.dates.start.localDate, "day")}
              </p>
              {props.item.dates.start.localTime ? <span>&#183;</span> : ""}

              <p id="time">
                {props.item.dates.start.localTime
                  ? timeConverter(props.item.dates.start.localTime)
                  : ""}
              </p>
            </div>
          </div>
          <div id="venueDetails">
            <h3 className={show ? "animateH3" : "reverseH3"}>
              {props.item.name}
            </h3>
            <p style={show ? { opacity: 0 } : {}}>
              {props.item._embedded ? props.item._embedded.venues[0].name : ""}-
              {props.item._embedded
                ? props.item._embedded.venues[0].city.name
                : ""}
              ,&nbsp;
              {props.item._embedded
                ? props.item._embedded.venues[0].state
                  ? props.item._embedded.venues[0].state.stateCode
                  : props.item._embedded.venues[0].country.countryCode
                : ""}
            </p>
          </div>
        </div>
        <div id="seeTicBtn">
          <Link to={`/buy/${props.item.id}`} onClick={setNavbar}>
            <button>See Tickets </button>
          </Link>
        </div>
      </div>
      <div className="hiddenDetails" id={show ? "addHeight" : ""}>
        <div id="lineup">
          <h5>LINEUP</h5>
          {props.item._embedded
            ? props.item._embedded.attractions &&
              props.item._embedded.attractions.length <= 4
              ? props.item._embedded.attractions.map((item, index) => {
                  return (
                    <Link
                      to={`/results/${item.name}`}
                      key={index}
                      onClick={setSearchName}
                    >
                      <p>{item.name}</p>
                    </Link>
                  );
                })
              : props.item._embedded.attractions &&
                props.item._embedded.attractions
                  .slice(0, 4)
                  .map((item, index) => {
                    return (
                      <Link
                        to={`/results/${item.name}`}
                        key={index}
                        onClick={setSearchName}
                      >
                        <p>{item.name}</p>
                      </Link>
                    );
                  })
            : ""}
          <p id={more ? "more" : "showMore"} onClick={moreLineup}>
            {props.item._embedded &&
            props.item._embedded.attractions &&
            props.item._embedded.attractions.length > 4
              ? `+${props.item._embedded.attractions.length - 4} more`
              : ""}
          </p>
          <div
            className="moreLineup"
            style={showMoreLineUp ? { display: "block" } : {}}
            onClick={hideMoreLineup}
          />

          <div
            id="moreContent"
            style={showMoreLineUp ? { display: "block" } : {}}
          >
            <img src={cancel} alt="close" onClick={hideMoreLineup} />
            <h1>Lineup</h1>
            {props.item._embedded
              ? props.item._embedded.attractions &&
                props.item._embedded.attractions
                  // .slice(4, props.item._embedded.attractions.length)
                  .map((item, index) => {
                    return (
                      <Link
                        to={`/results/${item.name}`}
                        key={index}
                        onClick={setSearchName}
                      >
                        <p>{item.name}</p>
                      </Link>
                    );
                  })
              : ""}
          </div>
        </div>
        <div id="venueInfo">
          <h5>VENUE INFO</h5>
          <div id="venueFlex">
            <img src={location} alt="location" />
            <div>
              <p>
                {props.item._embedded
                  ? props.item._embedded.venues[0].name
                  : ""}
              </p>
              <p>
                {props.item._embedded
                  ? props.item._embedded.venues[0].city.name
                  : ""}
                ,&nbsp;
                {props.item._embedded
                  ? props.item._embedded.venues[0].state
                    ? props.item._embedded.venues[0].state.stateCode
                    : props.item._embedded.venues[0].country.countryCode
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BasicDropDown;
