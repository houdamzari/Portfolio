import React from 'react';
import styled from "styled-components";
import {theme} from '../../theme';


const Container = styled.div`
        width: 100%;
  position: relative;
  height: 3rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  
  .circle1{
    border-radius: 50%;
    width: 1.8rem;
    height: 1.8rem;
    background-color: ${theme.lightpink};
  }
    .circle2{
      border-radius: 50%;
      width: 1.8rem;
      height: 1.8rem;
      background-color: ${theme.blue};
    }
  .circle3{
    border-radius: 50%;
    width: 1.8rem;
    height: 1.8rem;
    background-color: ${theme.pink};
  }
  .circle4{
    border-radius: 50%;
    width: 1.8rem;
    height: 1.8rem;
    background-color: ${theme.violet};
  }


`
function Colorsbar(props) {
    return (
        <Container>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
        </Container>
    );
}

export default Colorsbar;