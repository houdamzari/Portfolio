import React from 'react';
import styled from "styled-components";
import {theme} from '../../theme';


const Container = styled.div`
      margin-left:  10rem;
  width: 50%;

`
function LeftContainer({children}) {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default LeftContainer;