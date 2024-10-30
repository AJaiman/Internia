"use client"

import { useState } from "react";

export default function Slider() {
    const [value, setValue] = useState(50);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <>
            <div className="relative w-full">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={handleChange}
                    className="w-full h-5 rounded-full appearance-none text-gray-200 bg-royalPurple focus:outline-none"
                    style={{
                        background: `linear-gradient(to right, #220A3BBF ${value}%, #D2C0E3 ${value}%)`,
                    }}
                />
                {/* Display Value */}
                <p className="text-sm font-medium">{value}%</p>
            </div>
            <style jsx>{`
                input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    width: 24px;
                    height: 24px;
                    background-color: #220A3B; /* Custom thumb color */
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
                }

                input[type="range"]::-moz-range-thumb {
                    width: 24px;
                    height: 24px;
                    background-color: #7E57C2;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </>
    )
}