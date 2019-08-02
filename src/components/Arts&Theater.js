import React from "react";
import BasicPage from "./BasicPage";

function ArtsThearter() {
  let artsArr = [
    "Children's Theatre",
    "Circus & Specialty Acts",
    "Classical",
    "Comedy",
    "Cultural",
    "Dance",
    "Fashion",
    "Fine Art",
    "Magic & illusion",
    "Multimedia",
    "Music",
    "Opera",
    "Performance Art",
    "Spectacular",
    "Theatre",
    "Variety"
  ];

  return <BasicPage optionsArr={artsArr} pageName="Arts & Theater" />;
}

export default ArtsThearter;
