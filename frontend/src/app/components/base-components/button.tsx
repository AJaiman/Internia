import React from "react";



type ButtonProps = {
    type?:String // Default, Transparent, Link
    size?:String // Small, Medium, Large
    text:String
    backgroundColor?:String
}

export default function Button(props: ButtonProps) {
    return (
        <>
        <button className={"text-lg bg-[#4755D3] text-white px-6 py-1 rounded-full"}>{props.text}</button>
        </>
    )
}