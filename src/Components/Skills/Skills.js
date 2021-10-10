import React from "react";
import BigContainer from "./BigContainer";
import CardProgramming from "./CardProgramming";
import CardSoftware from "./CardSoftware";
import Text from "./Text";

function Skills() {
  return (
    <div>
      <BigContainer>
        <Text />
        <CardProgramming />
        <CardSoftware />
      </BigContainer>
    </div>
  );
}

export default Skills;
