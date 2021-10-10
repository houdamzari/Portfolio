import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.close ? "flex-start" : "space-between")};
  .column {
    width: 30%;
  }
`;
function BigContainer({ children, close }) {
  return <Container close={close}> {children}</Container>;
}

export default BigContainer;
