import React from "react";
import BasicPage from "./BasicPage";

function Concerts() {
  let concertsArr = [
    "Alternative",
    "Ballads",
    "Blues",
    "Children's Music",
    "Classical",
    "Country",
    "Dance",
    "Folk",
    "Hip-Hop",
    "Holiday",
    "Jazz",
    "Latin",
    "Medieval",
    "Metal",
    "New Age",
    "Other",
    "Pop",
    "R&B",
    "Reggae",
    "Religious",
    "Rock",
    "World"
  ];
  return <BasicPage optionsArr={concertsArr} pageName="Concert" />;
}

export default Concerts;
