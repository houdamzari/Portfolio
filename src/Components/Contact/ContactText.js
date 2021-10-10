import React from 'react';
import styled from "styled-components";
import Button from "../Home/Button";
import Center from "../Center";



const Container = styled.div`

      font-size: 7rem;
  position: relative;
  left: 15%;
  font-weight: 400;
 
`
function ContactText(props) {
    return (
        <Container>

            <div>Let's work together</div>

        </Container>
    );
}

export default ContactText;