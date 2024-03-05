import React from "react";
import { DiVim } from "react-icons/di";

type StatProps = {
    mainPart:String;
    subPart:String;
    padding?:String;
}

export default function FrontPageStat(props: StatProps) {
    return (
        <div className={"grid grid-cols-1 place-items-center " + props.padding}>
            <h1 className="text-9xl font-medium text-orange-600">{props.mainPart}</h1>
            <p className="text-4xl text-black">{props.subPart}</p>
        </div>
    );
}