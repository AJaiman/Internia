'use client'

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TypedText() {

    return (
        <h1 className="text-5xl flex flex-col gap-2">
            <div>
                <span className="text-orange-600 font-bold">Find</span> <span className="italic">your&nbsp;</span>
                <span><Typewriter 
                words={['interests.']}
                
                /></span>
            </div>
            <div className="ml-[15.70vw]"><Typewriter 
            words={['', 'internships.']}
            
            delaySpeed={900}
            
            /></div>
            <div className="ml-[15.70vw]"><Typewriter 
            words={['', 'oppurtunities.']}
            
            delaySpeed={2000}
            /></div>
        </h1>
    );
}