"use client"
import React, { useState } from "react";
import Slider from "./slider";

export default function BottomHalfHomePage() {
    
    return (
        <>
            <Slider name='Interest'/>
            <Slider name='Readability'/>
            <div className="w-full flex justify-between px-40 mt-[7vh]">
                <button className="bg-[#8A0000] hover:bg-[#680000] text-white px-5 py-2 rounded-full text-2xl font-bold">Skip</button>
                <button className="bg-[#002ABD] hover:bg-[#001B7B] text-white px-5 py-2 rounded-full text-2xl font-bold">Confirm</button>
            </div>
        </>
    )
}