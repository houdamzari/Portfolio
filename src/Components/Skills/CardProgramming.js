import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(180deg, #eeeeee 0%, rgba(238, 238, 238, 0) 100%);
  height: 70vh;
  width: 70%;
  margin-left: 15%;
  position: relative;
  top: 135px;
  padding-top: 57px;
  padding-left: 50px;
  font-size: 36px;
  @import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap");
  font-family: "Fira Code", monospace;
  font-weight: 600;
  .pink {
    color: #f6a2a2;
  }
  .violet {
    color: #db96e5;
  }
  .green {
    color: #24ec03;
  }
  .cyan {
    color: #79ced3;
  }
  .line {
    animation: typewriter 4s steps(44) 1s 1 normal both;
  }
`;
function CardProgramming() {
  return (
    <div>
      <Container>
        <span className="line">
          {" "}
          <span className="violet">{"import "}</span>
          <span className="cyan">{"Skills "}</span>
          <span className="violet">{"from "}</span>
          <span className="green">{'"Portfolio"'}</span>
        </span>
        <br />
        <br />
        <span className="line">
          <span className="violet">{"function "}</span>
          <span className="cyan">{"App"}</span>
          <span className="green">{"() {"}</span>
        </span>
        <br />
        <span className="line">
          <span className="violet">{"return "}</span>
          <span className="green">{"<"}</span>
          <span className="pink">{"Skills"}</span>
          <span className="green">{" />"}</span>
        </span>
        <br />
        <span className="line">
          <span className="green">{"}"}</span>
        </span>
        <br />
        <br />
        <span className="line">
          <span className="violet">{"const"}</span>
          <span className="pink">{" Skills"}</span>
          <span className="green">{" = ()"}</span>
          <span className="cyan">{" => "}</span>
          <span className="green">{"<"}</span>
          <span className="pink">{"div"}</span>
          <span className="green">{">"}</span>
        </span>
        <br />
        <span className="line">
          <span className="cyan">
            {"Css, Laravel, Html, Javascript, Reactjs, Sass"}
          </span>
        </span>
        <br />
        <span className="line">
          <span className="green">{"</"}</span>
          <span className="pink">{"div"}</span>
          <span className="green">{">"}</span>
        </span>
      </Container>
      <card />
    </div>
  );
}

export default CardProgramming;
