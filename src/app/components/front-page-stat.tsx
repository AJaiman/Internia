import React from "react";
import { DiVim } from "react-icons/di";

type StatProps = {
    mainPart:String;
    subPart:String;
}

export default function FrontPageStat(props: StatProps) {
    return (
        <div className="grid grid-cols-1 place-items-center border border-black">
            <h1 className="text-9xl">{props.mainPart}</h1>
            <p className="text-4xl">{props.subPart}</p>
        </div>
    );
}