import React from "react";
import FounderIcon from "./founder-icon";

export default function Founders() {
    
    const aravInfo = 'Arav Jaiman is a student who loves to code and get busy/rizzy'

    return (
        <div className="flex gap-[3vw]">
            <FounderIcon style={'founderSlideInAnim1'} color={'#FFE1E1'} info={aravInfo} pfpsrc={'/icons/chip.png'} name={'Eric Huang'}/>
            <FounderIcon style={'founderSlideInAnim2'} color={'#FFE1E1'} info={aravInfo} pfpsrc={'/icons/chip.png'} name={'Eric Huang'}/>
            <FounderIcon style={'founderSlideInAnim3'} color={'#FFE1E1'} info={aravInfo} pfpsrc={'/icons/chip.png'} name={'Eric Huang'}/>
            <FounderIcon style={'founderSlideInAnim4'} color={'#FFE1E1'} info={aravInfo} pfpsrc={'/icons/chip.png'} name={'Eric Huang'}/>
        </div>
    )
}