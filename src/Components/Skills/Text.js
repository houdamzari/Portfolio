import React from "react";
import styled from "styled-components";

const Container = styled.div`
  -webkit-text-stroke: 2px #6ed2d9; /* width and color */
  color: white;
  font-size: 5rem;
  line-height: 0.8;
  position: absolute;
  z-index: -1;
`;
function Text(props) {
  return (
    <Container>
      <h1> FRONT-END</h1>
      <h1> FRONT-END</h1>
      <h1> FRONT-END</h1>
      <h1> FRONT-END</h1>
    </Container>
  );
}

export default Text;
