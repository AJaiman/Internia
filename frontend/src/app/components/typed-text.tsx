'use client'

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TypedText() {

    const typeSpeed = 50;  

    return (
        <h1 className="text-5xl flex flex-col gap-2 min-h-[20vh] min-w-[38vw]">
            <div>
                <span className="text-orange-600 font-bold"><Typewriter typeSpeed={typeSpeed} words={['Find']}/></span> <span className="italic"><Typewriter typeSpeed={typeSpeed} words={['','your']} delaySpeed={450}/>&nbsp;</span>
                <span><Typewriter 
                typeSpeed={typeSpeed}
                words={['','interests.']}
                delaySpeed={900}
                /></span>
            </div>
            <div className="ml-[15.70vw]"><Typewriter 
            typeSpeed={typeSpeed}
            words={['', 'internships.']}
            delaySpeed={1900}
            /></div>
            <div className="ml-[15.70vw]"><Typewriter 
            typeSpeed={typeSpeed}
            words={['', 'oppurtunities.']}
            delaySpeed={3000}
            /></div>
        </h1>
    );
}