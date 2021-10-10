import React from "react";
import HeadingPrimary from "./Components/Home/HeadingPrimary";
import HeadingSecondary from "./Components/Home/HeadingSecondary";
import Button from "./Components/Home/Button";
import IconBar from "./Components/Home/IconBar";
import Spacer from "./Utilities/Spacer";
import Colorsbar from "./Components/Home/Colorsbar";
import LeftContainer from "./Components/Home/LeftContainer";
import BigContainer from "./Components/Home/BigContainer";
import RightContainer from "./Components/Home/RightContainer";
import isMobile from "ismobilejs";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const mobile = isMobile().phone;
  return (
    <BigContainer>
      <LeftContainer>
        <Colorsbar />
        <Spacer margin="2rem" />
        <HeadingSecondary />;
        <HeadingPrimary />;
        <Spacer margin="2rem" />
        <Button onClick={() => history.push("/about")}>Explore</Button>
        <Spacer margin="2rem" />
        <IconBar />
        {mobile && <RightContainer mobile={mobile} />}
      </LeftContainer>
      {!mobile && <RightContainer />}
    </BigContainer>
  );
}
export default App;
