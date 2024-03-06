'use client'

import React, { useState } from "react";


export default function UserTypeSelection() {
    const [isStudent, setIsStudent] = useState(true); // Initial state: student side
  
    const handleToggle = () => {
      setIsStudent(!isStudent); // Toggle between student and professor
    };
  
    return (
    <div
        className={`relative gap-28 w-fit h-8 rounded-full bg-gray-300 cursor-pointer px-4 py-1`}
        onClick={handleToggle}
    >
        <div className="flex gap-28">
            <span>Student</span>
            <span>Professor</span>
        </div>
        <span className={`absolute top-0 left-0 h-full px-4 py-1 rounded-full bg-orange-600 text-orange-600 transition duration-200 ${isStudent ? 'translate-x-0' : 'translate-x-[10.70rem]'}`}>{isStudent ? 'Student' : 'Professor'}</span>
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
