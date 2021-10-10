import React from 'react';
import Colorsbar from "../Home/Colorsbar";
import Spacer from "../../Utilities/Spacer";
import ContactText from "./ContactText";
import Button from "../Home/Button";
import Center from "../Center";
import styled from "styled-components";

const  Container = styled.div`
 
      width: 100%;
  height:100vh;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  background: linear-gradient(10deg, rgba(255,255,255,1) 20%, rgba(254,205,226,1) 66%);
  
`
const Background =styled.div`
    content: '';
    height:100vh;
    width: 100vw;
    z-index: -1;
    left: 0;
    position: absolute;
  background: linear-gradient(180deg, rgba(205,219,254,1) 2%, rgba(255,255,255,1) 90%);

`
function Contact() {

    return (
        <>
            <Background />
            <Container>

    <Center><ContactText /> </Center>
            <Spacer margin='5rem' />

            <Center>
                <Button className='emailme'>Email Me</Button></Center>
    </Container> </>
    );
}

export default Contact;