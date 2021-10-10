import React from 'react';
import BigContainer from "./BigContainer";
import Spacer from "../../Utilities/Spacer";
import Description from "./Description";
import HeadingPrimary from "./HeadingPrimary";



function Projects(children) {

    return (
            <BigContainer>
                <div>
                <HeadingPrimary />
                <Description />
                </div>
                <div></div>
            </BigContainer>
    );
}

export default Projects;