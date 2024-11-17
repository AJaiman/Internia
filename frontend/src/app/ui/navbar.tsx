"use client";

import { AcademicCapIcon, BellIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession();

    return (
        <div className="flex flex-row items-center justify-between w-screen h-auto px-12 py-6">
            <div className="flex flex-row items-center gap-3">
                <AcademicCapIcon className="w-8 h-8" />
                <h1 className="font-bold text-4xl text-royalPurple">internia</h1>
            </div>
            {
                session != null ? (
                    <div className="flex flex-row items-center gap-8">
                        <Link href="/discover" className={`text-royalPurple ${pathname.includes("/discover") ? "font-bold" : ""}`}>
                            Discover
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
                        {
                            session.user?.image ? (
                                <img
                                    alt="Profile"
                                    src={session.user?.image}
                                    width={40}
                                    height={40}
                                    className="rounded-full" />
                            ) : (<></>)
                        }
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
    )
}