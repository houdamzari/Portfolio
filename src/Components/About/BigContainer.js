import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 90vh;
  overflow: hidden;
`;
function BigContainer({ children }) {
  return <Container> {children}</Container>;
}

export default BigContainer;
