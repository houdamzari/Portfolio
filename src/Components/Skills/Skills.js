import React from "react";
import BigContainer from "./BigContainer";
import CardProgramming from "./CardProgramming";
import Text from "./Text";
import Fade from "react-reveal/Fade";

function Skills() {
  return (
    <div>
      <BigContainer>
        <Text />

        <Fade bottom>
          <CardProgramming />
        </Fade>
      </BigContainer>
    </div>
  );
}

export default Skills;
