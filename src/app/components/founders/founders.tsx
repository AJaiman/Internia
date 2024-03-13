import React from "react";
import FounderIcon from "./founder-icon";

export default function Founders() {
    
    const aravInfo = 'Arav is a student who loves to code and keep himself busy.'
    const ericInfo ='Eric was either PG for the Mavs or a developer for Internia.'
    const sehajInfo = "Internia was Sehaj's brain-child. He designed it into reality."
    const rohithInfo = 'Rohith was the guy we needed for sillyness XD.'

    return (
        <div className="flex gap-[3vw]">
            <FounderIcon style={'founderSlideInAnim1'} color={'bg-blue-200'} info={ericInfo} pfpsrc={'/icons/chip.png'} name={'Eric Huang'}/>
            <FounderIcon style={'founderSlideInAnim2'} color={'bg-red-200'} info={aravInfo} pfpsrc={'/icons/chip.png'} name={'Arav Jaiman'}/>
            <FounderIcon style={'founderSlideInAnim3'} color={'bg-yellow-200'} info={sehajInfo} pfpsrc={'/icons/chip.png'} name={'Sehaj Singh'}/>
            <FounderIcon style={'founderSlideInAnim4'} color={'bg-lime-200'} info={rohithInfo} pfpsrc={'/icons/chip.png'} name={'Rohith Athrey'}/>
        </div>
    )
}