import React from "react";

type FounderIconProps = {
    pfpsrc: String
    name: String
    info: String
    color: String
    style?: String
}

export default function FounderIcon(props: FounderIconProps) {
    return (
        <div className={`flex flex-col gap-2 ${props.style}`}>
            <div className="relative">
                <div className={`${props.color} h-[40vh] max-w-[35vh] rounded-full text-center px-5 py-[5rem] text-[1.75rem] font-bold`}>{props.info}</div>
                <img src={`${props.pfpsrc}`} className="h-[40vh] w-[35vh] rounded-full absolute top-0 left-0 bg-orange-200 hover:opacity-0 transition duration-500" />
            </div>
            <h1 className="text-center w-[35vh] text-3xl font-bold">{props.name}</h1>
        </div>
    )
}