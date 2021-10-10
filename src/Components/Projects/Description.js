import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import Spacer from "../../Utilities/Spacer";

const Container = styled.div`
  width: 100%;
  font-size: 1.2rem;
`;
function Description({description}) {
  return (
    <Container>
        {description}</Container>
  );
}

export default Description;
