"use client";

import { AcademicCapIcon, BellIcon } from "@heroicons/react/24/solid";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const { data: session } = useSession();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Hide navbar on interest selection page
    if (pathname === '/interest-selection') {
        return (
            null
        );
    }

    return (
        <div className="flex flex-row items-center justify-between w-screen h-auto px-12 py-6">
            <Link href="/">
                <div className="flex flex-row items-center gap-3">
                    <AcademicCapIcon className="w-8 h-8" />
                    <h1 className="font-bold text-4xl text-royalPurple">internia</h1>
                </div>
            </Link>
            {
                session != null ? (
                    <div className="flex flex-row items-center gap-8">
                        <Link href="/dashboard" className={`text-royalPurple ${pathname.includes("/dashboard") ? "font-bold" : ""}`}>
                            Dashboard
                        </Link>
                        <Link href="/discover" className={`text-royalPurple ${pathname.includes("/discover") ? "font-bold" : ""}`}>
                            Discover
                        </Link>
                        <Link href="/history" className={`text-royalPurple ${pathname == "/history" ? "font-bold" : ""}`}>
                            History
                        </Link>
                        <Link href="/favorites" className={`text-royalPurple ${pathname == "/favorites" ? "font-bold" : ""}`}>
                            Favorites
                        </Link>
                        {
                            session.user?.image ? (
                                <div className="relative" ref={dropdownRef}>
                                    <img
                                        alt="Profile"
                                        src={session.user?.image}
                                        width={40}
                                        height={40}
                                        className="rounded-full cursor-pointer hover:ring-2 hover:ring-royalPurple transition-all duration-200"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
                                    
                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg py-2 z-10 border border-gray-100 transform transition-all duration-200">
                                            <div className="px-4 py-3 border-b border-gray-100">
                                                <p className="text-sm font-medium text-gray-800">{session.user?.name}</p>
                                                <p className="text-xs text-gray-500">{session.user?.email}</p>
                                            </div>
                                            <button
                                                onClick={() => signOut({ callbackUrl: '/' })}
                                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-royalPurple transition-colors duration-150"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
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