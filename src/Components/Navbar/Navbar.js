import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {theme} from "../../theme";
import Spacer from "../../Utilities/Spacer";
import {useLocation} from "react-router-dom";

const Container = styled.div `
  


    ul{
      display: flex;
      flex-direction: row;
      gap: 10rem;
      text-decoration: none;
      padding: 2rem 0;
      list-style: none;
      justify-content: center;
      border-bottom: 2px solid ${theme.pink} ;
    }
    li > * {
      color: ${theme.black};
      font-size: 1.2rem;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 4px;

    }
.about{
  border-bottom: ${props=>props.condition ? `4px solid ${theme.pink}`:'none'};

}
`

function Navbar(props) {
    const location = useLocation();
    const condition = location.pathname === "/about";
    return (

        <Container condition={condition}>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="about" to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>

                </ul>
            </nav>


        </Container>
    );
}

export default Navbar;