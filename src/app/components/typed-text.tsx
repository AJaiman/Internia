'use client'

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TypedText() {

    return (
        <h1 className="text-5xl flex flex-col">
            <div>
                <span className="text-orange-600 font-bold">Find</span> <span className="italic">your&nbsp;</span>
                <span><Typewriter 
                words={['interests.']}
                cursor
                /></span>
            </div>
            <div className="ml-[15.70vw]"><Typewriter 
            words={['internships.']}
            cursor
            /></div>
            <div className="ml-[15.70vw]"><Typewriter 
            words={['oppurtunities.']}
            cursor
            /></div>
        </h1>
    );
}