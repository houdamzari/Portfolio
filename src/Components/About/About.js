import React from "react";
import HeadingPrimary from "./HeadingPrimary";
import Profile from "./Profile";
import BigContainer from "./BigContainer";
import { useHistory } from "react-router-dom";

function About({ setLocation }) {
  const history = useHistory();

  return (
    <div>
      <BigContainer>
        <HeadingPrimary history={history} />

        <Profile />
      </BigContainer>
    </div>
  );
}

export default About;
