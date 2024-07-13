import React from "react";

type LogoProps = {
    titleText: string
}

export default function Logo(props: LogoProps) {
    return (
        <>
            <img src="/logo.png" alt="Internia Logo" />
            <h1>{props.titleText}</h1>
        </>
    )
}