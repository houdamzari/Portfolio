import React from 'react';
import styled from "styled-components";
import {theme} from '../../theme';




const Container = styled.div `
    
    display: flex;
  flex-direction: row;
  justify-content: space-between;

`
function BigContainer({children}) {
    return (
        <Container> {children}</Container>
    );
}

export default BigContainer;