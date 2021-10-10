import React from 'react';
import styled from "styled-components";



const Container = styled.div`
      margin-top:  ${props=>props.margin};

`
function Spacer({margin}) {
    return (
        <Container margin={margin}> </Container>
    );
}

export default Spacer;