"use client"

import Paper from "@/app/ui/paper/paper";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import React from "react";

export default function HomeLayout({
  children 
} : Readonly<{
  children: React.ReactNode
}>) {
    const {data: session} = useSession();
    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full h-full px-24">
            <div className="relative w-3/4 h-[2vh]">
                <h1 className="text-2xl font-bold text-royalPurple">Hi {session?.user?.name?.split(" ")[0]}!</h1>
            </div>
            <div className="flex flex-col w-4/5 max-h-[80vh] py-4">
                {children}
            </div>
        </div>
    )
}