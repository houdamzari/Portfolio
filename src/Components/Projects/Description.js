import React from 'react';
import styled from 'styled-components';
import {theme} from "../../theme";
import Spacer from "../../Utilities/Spacer";



const Container = styled.div`
        width: 30%;
  font-size: 1.2rem;
`
function Description(props) {
    return (
        <Container>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet asperiores esse eum exercitationem id incidunt ipsa, mollitia natus nesciunt odit porro, quae quaerat, quia voluptate? Ab dolore ducimus odit.
        </Container>
    );
}

export default Description;