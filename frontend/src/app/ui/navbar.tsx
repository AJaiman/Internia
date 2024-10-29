"use client";

import { AcademicCapIcon, BellIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-row items-center justify-between w-screen h-auto px-12 py-6">
            <div className="flex flex-row items-center gap-3">
                <AcademicCapIcon className="w-8 h-8" />
                <h1 className="font-bold text-4xl text-royalPurple">internia</h1>
            </div>
            <div className="flex flex-row items-center gap-8">
                <Link href="/home" className={`text-royalPurple ${pathname == "/home" ? "font-bold" : ""}`}>
                    Home
                </Link>
                <Link href="/history" className={`text-royalPurple ${pathname == "/history" ? "font-bold" : ""}`}>
                    History
                </Link>
                <Link href="/favorites" className={`text-royalPurple ${pathname == "/favorites" ? "font-bold" : ""}`}>
                    Favorites
                </Link>
                <Link href="/notifications" className="text-royalPurple transition hover:scale-110">
                    <BellIcon className="w-7 h-7" />
                </Link>
                <div className="w-12 h-12 rounded-full border border-black"></div>
            </div>
        </div>
    )
}