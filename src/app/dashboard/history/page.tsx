import React from "react";
import DashNav from "../components/dashNav";
import ProfOrPaperSelect from "../components/profsAndPapersList/profOrPaperSelect";
import CondensedProfCard from "../components/profsAndPapersList/condensedProfCard";

export default function HistoryPage() {
    return (
        <>
        <DashNav pfp=""/>
        <ProfOrPaperSelect />
        <CondensedProfCard profId="Dr. Kefter-Oobleck" />
        </>
    )
}