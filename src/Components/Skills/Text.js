import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const Container = styled.div`
  -webkit-text-stroke: 2px ${theme.violet}; /* width and color */
  color: white;
  font-size: 5rem;
  line-height: 0.8;
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
