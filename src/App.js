import HeadingPrimary from './Components/Home/HeadingPrimary';
import HeadingSecondary from "./Components/Home/HeadingSecondary";
import Button from "./Components/Home/Button";
import IconBar from "./Components/Home/IconBar";
import Spacer from "./Utilities/Spacer";
import Colorsbar from "./Components/Home/Colorsbar";
import LeftContainer from "./Components/Home/LeftContainer";
import BigContainer from "./Components/Home/BigContainer";
import RightContainer from "./Components/Home/RightContainer";
import {useHistory} from "react-router-dom";



function App() {
const history = useHistory();
  return(
      <BigContainer>
          <LeftContainer>
              <Spacer margin='5rem' />
              <Colorsbar />
              <Spacer margin='4rem' />
              <HeadingSecondary/>;
        <HeadingPrimary/>;
              <Spacer margin='2rem' />
              <Button onClick={()=>history.push('/about')}>Explore</Button>
          <Spacer margin='2rem' />
          <IconBar />
          </LeftContainer>
            <RightContainer></RightContainer>
      </BigContainer>
  );
}
export default App;