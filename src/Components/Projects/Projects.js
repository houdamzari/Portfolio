import React from "react";
import BigContainer from "./BigContainer";
import Spacer from "../../Utilities/Spacer";
import picture from "../../media/pic.jpeg";
import Description from "./Description";
import Tablet from "./Tablet";
import HeadingPrimary from "./HeadingPrimary";

function Projects(children) {
  return (
    <BigContainer close>
      <div className="column">
        <HeadingPrimary />
        <Description />
      </div>

      <Tablet img={picture} />
    </BigContainer>
  );
}

export default Projects;
