import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const Container = styled.div`
  padding-bottom: 2rem;
  position: relative;
  left: 13rem;
  width: 100%;
  color: ${theme.pink};
  span {
    color: ${theme.grey};
    font-size: 1.2rem;
    font-weight: lighter;
    line-height: 1rem;
  }
`;
function HeadingPrimary({title}) {
  return (
    <Container>
      <h1> {title}</h1>
      <span>
        &#8212;A statistics web app about the Coronavirus state in MOROCCO
      </span>
    </Container>
  );
}

export default HeadingPrimary;
