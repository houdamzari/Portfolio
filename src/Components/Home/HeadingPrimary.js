import React from 'react';
import styled from 'styled-components';
import {theme} from '../../theme';

const Container = styled.div `
        margin: 0px;
        padding: 0px;
  
  .heading{
    width: 100%;
    font-weight: 600;
    font-size: 4rem;
    color: ${
      theme.black
    };
  }

`

function HeadingPrimary(props) {

    return (
        <Container>        <h1 className="heading">FRONT-END Developper </h1>
        </Container>
    );
}

export default HeadingPrimary;