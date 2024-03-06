'use client'

import React, { useState } from "react";


export default function UserTypeSelection() {
    const [isStudent, setIsStudent] = useState(true); // Initial state: student side
  
    const handleToggle = () => {
      setIsStudent(!isStudent); // Toggle between student and professor
    };
  
    return (
    <div
        className={`relative gap-28 w-[17.25rem] h-8 rounded-full bg-gray-300 cursor-pointer px-4 py-1`}
        onClick={handleToggle}
    >
        
        <span className={`absolute top-0 left-0 h-full px-4 py-1 rounded-full bg-orange-600 text-orange-600 transition duration-200 ${isStudent ? 'translate-x-0' : 'translate-x-[10.70rem]'}`}>{isStudent ? 'Student' : 'Professor'}</span>

        <div className="absolute top-1 left-4 flex gap-28">
            <span>Student</span>
            <span>Professor</span>
        </div>
        <div className="absolute top-0 left-0 w-[17.25rem] h-8 z-1"></div>
        
    </div>
    );
}

{/* Slider 
    <div
        className={`absolute top-0 left-0 w-8 h-8 rounded-full bg-orange-500 shadow-md cursor-pointer transition-transform transform ${
        isStudent ? 'translate-x-0' : 'translate-x-8'
        }`}
        onClick={handleToggle}
    ></div> */}
