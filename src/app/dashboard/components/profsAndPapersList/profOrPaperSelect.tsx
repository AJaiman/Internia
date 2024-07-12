"use client"

import React, { useEffect, useRef, useState } from "react";

export default function ProfOrPaperSelect() {

    const profTab = useRef<HTMLInputElement>(null);
    const paperTab = useRef<HTMLInputElement>(null);

    const [profFocus, setProfFocus] = useState(true);
    const [paperFocus, setPaperFocus] = useState(false);



    const handleProfFocus = () => {
        if (!profFocus) {
            setProfFocus(true);
            setPaperFocus(false);
        }
    }
    const handlePaperFocus = () => {
        if (!paperFocus) {
            setPaperFocus(true);
            setProfFocus(false);
        }
    }

    useEffect(() => {

        if (profFocus) {
            profTab.current?.focus();
        }
        else {
            paperTab.current?.focus();
        }

    }, [profFocus, paperFocus])



    return (
        <div role="tablist" className="tabs mt-10 px-5">
            <input ref={profTab} type="radio" onFocus={handleProfFocus}  name="my_tabs_1" role="tab" className="tab focus:drop-shadow-lg border-b-4 border-slate focus:border-b-4 transition duration-200" aria-label="Professors" />

            <input ref={paperTab} type="radio" onFocus={handlePaperFocus} name="my_tabs_1" role="tab" className="tab focus:drop-shadow-lg border-b-4 border-slate focus:border-b-4 transition duration-200" aria-label="Papers" />
        </div>
    )
}