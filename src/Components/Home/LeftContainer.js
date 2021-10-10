import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 10rem;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50%;
    margin-left: 30px;
  }
`;
function LeftContainer({ children }) {
  return <Container>{children}</Container>;
}

export default LeftContainer;
