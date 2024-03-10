import React from "react";
import FounderIcon from "./founder-icon";

export default function Founders() {
    
    const aravInfo = 'Arav Jaiman is a student who loves to code and get busy/rizzy'

    return (
        <div>
            <FounderIcon color={'#FFE1E1'} info={aravInfo} pfpsrc={'/icons/chip.png'} name={'Eric Huang'}/>
        </div>
    )
}