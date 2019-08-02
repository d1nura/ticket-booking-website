import React from "react";
import BasicPage from "./BasicPage";

function Family() {
  let familyArr = [
    "Puppetry",
    "Magic",
    "Circus",
    "Rodeo",
    "Fairs",
    "Children's Music"
  ];
  return <BasicPage optionsArr={familyArr} pageName="Family" />;
}

export default Family;
