import React from 'react';
import styled from 'styled-components';
import {theme} from "../../theme";
import Spacer from "../../Utilities/Spacer";



const Container = styled.div`

  padding-left: 10%;
  width:55%;
  padding-top: 5rem;
  
    h1 {
      font-weight: 600;
      color: ${theme.black};
      display: inline-block;
      letter-spacing: 10px;
      font-size: 5rem;
    }
  h2 {
    font-weight: 600;
    color: ${theme.black};
    display: inline-block;
    font-size: 3rem;
  }
  span{
    color: ${theme.grey};
    font-size: 1rem;
  }
  p{
    font-weight: 400;
    font-size: 1.3rem;
    color: ${theme.grey};
  }

  #more-arrows {
    width: 75px;
    height: 65px;
    cursor: pointer;
    position: relative;
    left: 20rem;
    top: 2rem;
    &:hover {

      polygon {
        fill: ${theme.pink};
        transition: all .2s ease-out;

        &.arrow-bottom {
          transform: translateY(-18px);
        }

        &.arrow-top {
          transform: translateY(18px);
        }

      }

    }

  }

  polygon {
    fill: ${theme.grey};
    transition: all .2s ease-out;

    &.arrow-middle {
      opacity: 0.75;
    }

    &.arrow-top {
      opacity: 0.5
    }

  }


`
function HeadingPrimary(props) {
    return (
        <Container>
            <span>&#8212; Introducing</span>
            <Spacer margin='1rem' />

            <h2>    HELLO</h2>
            <Spacer margin='.5rem' />

            <h1>I'm Houda</h1>
            <h1>MZARI</h1>
            <p>Innovative Front End developper with quite an experience
            building and maintaining responsive websites in the recruiting industry.
            Passionate about usability and possess working knowledge of Design and Figma.</p>
            <svg id="more-arrows">
                <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
            </svg>
        </Container>
    );
}

export default HeadingPrimary;