import React from 'react';
import HeadingPrimary from "./HeadingPrimary";
import Profile from "./Profile";
import Colorsbar from "../Home/Colorsbar";
import BigContainer from "./BigContainer";
import Spacer from "../../Utilities/Spacer";



function About(children) {

    return (
        <div>
            <BigContainer>

                <HeadingPrimary />

                <Profile />
            </BigContainer>
        </div>
    );
}

export default About;