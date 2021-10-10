import React from 'react';
import Colorsbar from "../Home/Colorsbar";
import Spacer from "../../Utilities/Spacer";
import ContactText from "./ContactText";
import Button from "../Home/Button";
import Center from "../Center";



function Contact() {

    return (
        <>
        <Spacer margin='8rem' />

    <ContactText />
            <Spacer margin='5rem' />

            <Center>
                <Button className='emailme'>Email Me</Button></Center>
        </>
    );
}

export default Contact;