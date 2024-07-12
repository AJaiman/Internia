"use client"

import React, { useEffect, useRef, useState } from "react";
import DashNav from "../components/dashNav";
import CondensedProfCard from "../components/profsAndPapersList/condensedProfCard";

export default function HistoryPage() {

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

    const professorHistory = ["Dr. Kefter-Oobleck", "Dr. Kefter-Oobleck", "Dr. Kefter-Oobleck", "Dr. Kefter-Oobleck", "Dr. Kefter-Oobleck", "Dr. Kefter-Oobleck", "Dr. Kefter-Oobleck", "Dr. Kefter-Oobleck"]

    return (
        <>
        <DashNav pfp=""/>
        <div role="tablist" className="tabs mt-10 px-5">
            <input ref={profTab} type="radio" onFocus={handleProfFocus}  name="my_tabs_1" role="tab" className="tab focus:drop-shadow-lg border-b-4 border-slate focus:border-b-4 transition duration-200" aria-label="Professors" />

            <input ref={paperTab} type="radio" onFocus={handlePaperFocus} name="my_tabs_1" role="tab" className="tab focus:drop-shadow-lg border-b-4 border-slate focus:border-b-4 transition duration-200" aria-label="Papers" />
        </div>
        <div className="p-10">
            <div className="overflow-auto h-[72vh]">
                {
                    profFocus ?
                    professorHistory.map(prof => (
                        <CondensedProfCard profId={prof} />
                    )) : <p>bruh</p>
                }
            </div>
        </div>
        </>
    )
}