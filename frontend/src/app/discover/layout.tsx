import Paper from "@/app/ui/paper/paper";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function HomeLayout({
  children 
} : Readonly<{
  children: React.ReactNode
}>) {
    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full h-full px-24">
            <div className="relative w-3/4 h-[5vh]">
                <input 
                    className="w-full h-full bg-royalPurple/10 rounded-[8px] border border-royalPurple/25 pl-12 placeholder-royalPurple/50 text-royalPurple placeholder:italic focus:outline-none"
                    placeholder="Search for professors, papers, etc." />
                <MagnifyingGlassIcon className="absolute top-1/2 -translate-y-1/2 left-3 w-6 h-6 text-royalPurple" />
            </div>
            <div className="flex flex-col w-4/5 max-h-[80vh] py-4">
                {children}
            </div>
        </div>
    )
}