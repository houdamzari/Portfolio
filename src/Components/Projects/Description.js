import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import Spacer from "../../Utilities/Spacer";
import Button from "../Home/Button";

const Container = styled.div`
  position: relative;
  left: 13rem;
  width: 60%;
  font-size: 1.2rem;
  
`;
function Description({description}) {
  return (
    <Container>
      <div>{description}</div>
      <Spacer margin='2rem' />

      <Button  classname='projects'>Visit</Button>
    </Container>

  );
}

export default Description;
