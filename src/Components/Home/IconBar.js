import React from "react";
import styled from "styled-components";
import linkedin from "../../media/iconmonstr-linkedin-3.svg";
import github from "../../media/iconmonstr-github-3.svg";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  a {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;
function IconBar(props) {
  return (
    <Container>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        href="https://www.linkedin.com/in/houda-mzari-2304401b1/"
        target="_blank"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
      <a href="github.com" target="_blank">
        <img src={github} alt="github" target="_blank" />
      </a>
    </Container>
  );
}

export default IconBar;
