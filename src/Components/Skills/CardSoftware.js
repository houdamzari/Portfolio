import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import Figma from "./media/figma.svg";
import AdobeXD from "./media/adobe-xd.svg";
import Photoshop from "./media/photoshop.svg";

const Container = styled.div`
  position: absolute;
  background-color: ${theme.black};
  width: 30%;
  height: 30%;
  border-radius: 10px;
  top: 55%;
  left: 2%;

  .topbar {
    background-color: ${theme.grey};
    position: absolute;
    width: 100%;
    height: 13%;
    display: flex;

    flex-direction: row;
    gap: 1rem;
    padding: 0.4rem 2rem;
  }
  //.topbar > * {
  //  margin-top: 10rem;
  //
  //}
  .circle1 {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    background-color: red;
    opacity: 0.9;
  }
  .circle2 {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    background-color: darkorange;
  }
  .circle3 {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    background-color: limegreen;
  }
  .icons {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    position: relative;
    top: 2.5rem;
    left: 7rem;
  }
  .Figma {
    width: 7rem;
    height: 10rem;
    margin-left: -4.5rem;
  }
  .AdobeXD {
    width: 7rem;
    height: 10rem;
    margin-left: -3.5rem;
    margin-top: -0.3rem;
  }
  .Photoshop {
    width: 7rem;
    height: 10rem;
  }
  .Js {
    width: 7rem;
    height: 10rem;
  }
  .React {
    width: 7rem;
    height: 10rem;
  }
`;
function CardSoftware() {
  return (
    <div>
      <Container>
        <div className="topbar">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>
        <div className="icons">
          <img src={Figma} alt="" className="Figma" />
          <img src={AdobeXD} alt="" className="AdobeXD" />
          <img src={Photoshop} alt="" className="Photoshop" />
        </div>
      </Container>
      <card />
    </div>
  );
}

export default CardSoftware;
