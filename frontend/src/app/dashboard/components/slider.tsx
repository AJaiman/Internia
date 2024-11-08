import React, { useState } from "react";

type SliderProps = {
    name: string,
}

export default function Slider(props: SliderProps) {
    const [rangeValue, setRangeValue] = useState(50);

    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(Number(event.target.value));
      };
      
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold">{props.name}</h1>
            <span className="flex items-center">
                <div className="w-11 m-4">{rangeValue}%</div>
                <input type="range" min="0" max="100" defaultValue='50' onChange={handleRangeChange} className="w-[40vw] range [--range-shdw:teal] range-lg border border-black bg-[#D9D9D9]" />
            </span>
        </div>
    )
}