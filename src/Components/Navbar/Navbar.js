import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";

const Container = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    gap: 10rem;
    text-decoration: none;
    padding: 2rem 0;
    list-style: none;
    justify-content: center;
    border-bottom: 2px solid ${theme.pink};
  }
  li > * {
    color: ${theme.black};
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 4px;
  }
  .about {
    border-bottom: ${(props) =>
      props.condition ? `4px solid ${theme.pink}` : "none"};
  }
  .projects {
    border-bottom: ${(props) =>
      props.condition1 ? `4px solid ${theme.pink}` : "none"};
  }
  .skills {
    border-bottom: ${(props) =>
      props.condition2 ? `4px solid ${theme.pink}` : "none"};
  }
  .contact {
    border-bottom: ${(props) =>
      props.condition3 ? `4px solid ${theme.pink}` : "none"};
  }
`;

function Navbar(props) {
  const location = useLocation();
  const condition = location.pathname === "/about";
  const condition1 = location.pathname === "/projects";
  const condition2 = location.pathname === "/skills";
  const condition3 = location.pathname === "/contact";

  return (
    <Container
      condition={condition}
      condition1={condition1}
      condition2={condition2}
      condition3={condition3}
    >
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className="about" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="skills" to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className="projects" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="contact" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Navbar;
