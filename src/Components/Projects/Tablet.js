import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .meuContainer {
    transform: scale(1);
    width: 10rem;
    height: 1000px;
    background-color: white;
    margin: 0;
    -webkit-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    transform-origin: 50% 0;
    margin: 0 auto;
  }

  .meuContainer .tablet {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    display: block;
    width: 35.5rem;
    min-height: 23.5rem;
    margin: auto;
    padding: 56px 10px;
    border-radius: 35px;
    background-color: #aaaaaa;
    box-shadow: 2px 8px 0 2px #333333, inset 0 0 10px 0 rgba(0, 0, 0, 0.9),
      46px 66px 50px -30px rgba(0, 0, 0, 0.32);
    -webkit-transform: perspective(1500px) rotateX(80deg) rotateY(-50deg)
      rotateZ(50deg) translate(18px, 18px);
    transform: perspective(1500px) rotateX(12deg) rotateY(-30deg) rotateZ(15deg)
      translate(18px, 18px);
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transition: all 1200ms cubic-bezier(0.075, 0.82, 0.165, 1);
    transition: all 1200ms cubic-bezier(0.075, 0.82, 0.165, 1);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .meuContainer .tablet:after {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 15px;
    display: none;
    width: 50px;
    height: 20px;
    margin-right: auto;
    margin-left: auto;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.05);
    border-radius: 200px;
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.5);
    background-color: #222222;
    content: "";
  }

  .meuContainer .tablet:before {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 35rem;
    min-height: 23rem;
    display: block;
    background-color: #000000;
    border-radius: 35px;
    content: "";
  }

  .meuContainer .tablet .tela {
    position: absolute;
    display: block;
    overflow: hidden;
    z-index: 1;
    left: 30px;
    top: -5px;
    width: 32rem;
    height: 22.5rem;
    border-radius: 30px !important;

    white-space: nowrap;

    z-index: 1;
    img {
      position: absolute;
      width: 100%;
      height: 90%;
      top: 30px;
      object-fit: cover;
      border-radius: 30px !important;
    }
  }

  .meuContainer:hover .tablet {
    box-shadow: 0 0 0 0 #dbdbdb, inset 0 0 10px 0 rgba(0, 0, 0, 0.2),
      0 25px 25px -20px rgba(0, 0, 0, 0.2);
    -webkit-transform: perspective(1500px) translate(0px, 70px);
    transform: perspective(1500px) translate(0px, 70px);
  }
`;

function Tablet({ img }) {
  return (
    <Wrapper img={img}>
      <div className="meuContainer">
        <div className="tablet">
          <div className="tela">
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Tablet;
