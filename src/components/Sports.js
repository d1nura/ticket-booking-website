import React, { useState } from "react";
import "../scss/basicComponent.scss";
import BasicComponent from "./BasicComponent";
import BasicPage from "./BasicPage";

function Sports() {
  let sportsArr = [
    "Aquatics",
    "Athletic Races",
    "Badminton",
    "Baseball",
    "Basketball",
    "Biathlon",
    "Body Building",
    "Boxing",
    "Cricket",
    "Curling",
    "Cycling",
    "Equestrian",
    "eSports",
    "Extreme",
    "Field Hockey",
    "Fitness",
    "Floorball",
    "Football",
    "Golf",
    "Gymnastics",
    "HandBall",
    "Ics Skating",
    "Indoor Soccer",
    "Lacrosse",
    "Martial Arts",
    "Miscellaneous",
    "Motorsports",
    "Netball",
    "Rodeo",
    "Rollerderby",
    "Rugby",
    "Skiing",
    "Soccer",
    "Softball",
    "Surfing",
    "Swimming",
    "Table Tennis",
    "Tennis",
    "Vollyball",
    "Wrestling"
  ];

  return <BasicPage optionsArr={sportsArr} pageName="sports" />;
}

export default Sports;
