import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import Spacer from "../../Utilities/Spacer";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.gap};
  justify-content: ${(props) => (props.close ? "flex-start" : "space-between")};
  .column {
    width: 50%;
  }
`;
function BigContainer({ children, close , gap}) {
  return (
      <>
        <Spacer margin='8rem' />

        <Container close={close} gap={gap}>  {children}</Container>);
      </> )}

export default BigContainer;
