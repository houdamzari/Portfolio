import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import Css from "./media/icons8-css3.svg";
import Html from "./media/icons8-html-5.svg";
import Sass from "./media/sass.svg";
import react from "./media/icons8-react-native.svg";
import Laravel from "./media/laravel.svg";
import Js from "./media/javascript.svg";

const Container = styled.div`
  position: absolute;
  background-color: ${theme.black};
  width: 50%;
  height: 40%;
  border-radius: 10px;
  top: 10%;
  left: 49%;

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
    gap: 2.9rem;
    position: relative;
    top: 7rem;
    left: 0.5rem;
  }

  .html {
    width: 7rem;
    height: 10rem;
    margin-left: -4.5rem;
  }

  .Sass {
    width: 7rem;
    height: 10rem;
    margin-left: -3.5rem;
    margin-top: -0.3rem;
  }

  .Laravel {
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

  .title {
    color: white;
    margin-top: 0.3rem;
  }

  .Texts {
    position: relative;
    top: 5rem;
  }
  .Texts p {
    border-right: 0.15em solid orange;
    font-family: "Courier";
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    color: #63de00;
  }
  .Texts p:nth-child(1) {
    width: 67%;
    -webkit-animation: type 2s steps(40, end);
    animation: type 2s steps(40, end);
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  .Texts p:nth-child(2) {
    width: 68%;
    opacity: 0;
    -webkit-animation: type2 2s steps(40, end);
    animation: type2 2s steps(40, end);
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .Texts p:nth-child(3) {
    width: 68%;
    opacity: 0;
    -webkit-animation: type2 2s steps(40, end);
    animation: type2 2s steps(40, end);
    -webkit-animation-delay: 2s;
    animation-delay: 5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .Texts p:nth-child(4) {
    width: 65%;
    opacity: 0;
    -webkit-animation: type2 2s steps(40, end);
    animation: type2 2s steps(40, end);
    -webkit-animation-delay: 2s;
    animation-delay: 7s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .Texts p:nth-child(5) {
    width: 69%;
    opacity: 0;
    -webkit-animation: type2 2s steps(40, end);
    animation: type2 2s steps(40, end);
    -webkit-animation-delay: 2s;
    animation-delay: 9s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  .Texts p:nth-child(6) {
    width: 71%;
    opacity: 0;
    -webkit-animation: type3 5s steps(20, end),
      blink 0.5s step-end infinite alternate;
    animation: type3 5s steps(20, end), blink 0.5s step-end infinite alternate;
    -webkit-animation-delay: 4s;
    animation-delay: 11s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  @keyframes type {
    0% {
      width: 0;
    }
    99.9% {
      border-right: 0.15em solid orange;
    }
    100% {
      border: none;
    }
  }

  @-webkit-keyframes type {
    0% {
      width: 0;
    }
    99.9% {
      border-right: 0.15em solid orange;
    }
    100% {
      border: none;
    }
  }

  @keyframes type2 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 0.15em solid orange;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }

  @-webkit-keyframes type2 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 0.15em solid orange;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }

  @keyframes type3 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes type3 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  @-webkit-keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  @keyframes fade {
    100% {
      opacity: 0;
    }
  }
`;
function CardProgramming() {
  //11 24 9

  return (
    <div>
      <Container>
        <div className="topbar">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <p className="title">Programming Languages</p>
        </div>
        <div className="Texts">
          <p className="importText1">
            @importing CSS from 'Mastered-Programming-Languages' ...
          </p>
          <p className="importText2">
            @importing HTML from 'Mastered-Programming-Languages' ...
          </p>
          <p className="importText3">
            @importing SASS from 'Mastered-Programming-Languages' ...
          </p>
          <p className="importText4">
            @importing JS from 'Mastered-Programming-Languages' ...
          </p>
          <p className="importText5">
            @importing REACT from 'Mastered-Programming-Languages' ...
          </p>
          <p className="importText6">
            @importing LARAVEL from 'Mastered-Programming-Languages' ...
          </p>
        </div>
        <div className="icons">
          <img src={Css} alt="" className="css" />
          <img src={Html} alt="" className="html" />
          <img src={Sass} alt="" className="Sass" />
          <img src={Js} alt="" className="Js" />
          <img src={react} alt="" className="React" />
          <img src={Laravel} alt="" className="Laravel" />
        </div>
      </Container>
      <card />
    </div>
  );
}

export default CardProgramming;
