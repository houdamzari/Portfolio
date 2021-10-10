import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 7rem;
  font-size: 6rem;
  position: relative;
  font-weight: 400;
`;
function ContactText(props) {
  return (
    <Container>
      <div>Let's work together</div>
    </Container>
  );
}

export default ContactText;
