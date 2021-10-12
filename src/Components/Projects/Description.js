import React from "react";
import styled from "styled-components";
import Spacer from "../../Utilities/Spacer";
import Button from "../Home/Button";
import { theme } from "../../theme";
const Container = styled.div`
  position: relative;
  left: 13rem;
  width: 60%;
  font-size: 1.2rem;
  .tags {
    color: ${theme.violet};
  }
`;
function Description({ description, tags }) {
  return (
    <Container>
      <p className="tags">{tags}</p>
      <Spacer margin="1rem" />
      <div>{description}</div>
      <Spacer margin="2rem" />

      <Button classname="projects">Visit</Button>
    </Container>
  );
}

export default Description;
