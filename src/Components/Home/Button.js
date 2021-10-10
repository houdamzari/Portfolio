import React from 'react';
import styled from "styled-components";
import {theme} from '../../theme';

const Container = styled.button`
      background-color:transparent;
      font-size: 1.3rem;
      font-weight: 600;
      padding: 1rem 1.5rem;
      text-transform: uppercase;
      position: relative;
  border: 2px solid ${theme.black} ;
  cursor: pointer;
  &:after{
    content: '';
    background-color: ${theme.pink};
    position: absolute;
    top: .3rem;
    left: .3rem;
    width: 105%;
    height: 110%;
    z-index: -1;
    transition: all .4s ;

  }
  &:hover{
    &:after{
    transform: translate(-5px,-5px);
      width: 99.9999%;
      height: 99.9999%;
  }}
  
  
  
`
function Button({children,onClick}) {
    return (
        <Container onClick={onClick}>
            {children}
        </Container>
    );
}

export default Button;