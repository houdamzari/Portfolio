import React from 'react';
import BigContainer from "./BigContainer";
import Spacer from "../../Utilities/Spacer";
import CardProgramming from "./CardProgramming";
import CardSoftware from "./CardSoftware";
import Text from "./Text";



function Skills(children) {

    return (
        <div>
            <BigContainer>
                <Text />
                <CardProgramming />
                <CardSoftware />
            </BigContainer>
        </div>
    );
}

export default Skills;