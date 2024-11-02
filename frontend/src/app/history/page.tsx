"use client"

import { useState } from "react"

export default function Page() {
    const [tab, setTab] = useState<"Papers" | "Professors">("Papers")

    return (
        <div className="self-center flex flex-col w-[70.3%] gap-4 h-full mt-8">
            <h1 className="font-black text-4xl text-royalPurple">Recently Viewed</h1>
            <div className="flex flex-row h-10 gap-4">
                <button 
                  className={`text-lg text-royalPurple px-6 ${tab == 'Papers' ? 'border-b-2 border-royalPurple font-bold' : ''}`}
                  onClick={() => setTab("Papers")}>
                    Papers
                </button>
                <button 
                  className={`text-lg text-royalPurple px-6 ${tab == 'Professors' ? 'border-b-2 border-royalPurple font-bold' : ''}`}
                  onClick={() => setTab("Professors")}>
                    Professors
                </button>
            </div>
        </div>
    )
}