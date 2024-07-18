'use client'

import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { FaBell } from "react-icons/fa";
import Link from "next/link";
import Searchbar from "../../components/navbar/searchbar";
type dashProps = {
    showSearch: boolean,
    pfp: string;
};

export default function DashNav(props: dashProps) {
    const [showPfpDropDown, setShowPfpDropDown] = useState(false);
    const [isExpanded, setIsExpanded]=useState(false);
    const handleClick =() => {
        setIsExpanded(true);
    }
    const handleUnClick =() => {
        setIsExpanded(false);
    }
    return (
        <>
            <nav className="flex h-16 items-center justify-between py-2 px-10">
            <Link href="/dashboard"><img src="/logo.png" alt="Logo" className="w-48 h-12" /></Link>
                { props.showSearch && (<div className="relative flex-grow mx-0 flex justify-center">
                    <Searchbar isExpanded={isExpanded}
        handleClick={handleClick}
        handleUnClick={handleUnClick} />
                </div>) }
                <section className="relative flex items-center gap-2">
                    <ul className="flex">
                        <li className="select-none px-4 border-r border-gray-500 hover:opacity-50 cursor-pointer font-sans">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="select-none px-4 border-r border-gray-500 hover:opacity-50 cursor-pointer font-sans">
                            <Link href="/history">History</Link>
                        </li>
                        <li className="select-none px-4 border-r border-gray-500 hover:opacity-50 cursor-pointer font-sans">
                            <Link href="/favorites">Favorites</Link>
                        </li>
                        <li className="select-none px-4 border-r border-gray-500 hover:opacity-50 cursor-pointer flex items-center">
                        <Link href="/notifications"><FaBell /></Link>
                        </li>   
                    </ul>
                    <img src={props.pfp} alt="PFP" onClick={() => setShowPfpDropDown(!showPfpDropDown)} className="w-14 h-14 rounded-full cursor-pointer px-4" />
                    {
                        showPfpDropDown ?
                            <div className="rounded-[10px] drop-shadow-md absolute top-[200%] left-[35%] w-[300px] h-fit bg-white">
                                <section className="p-2 border-b border-b-gray-500">
                                    <h1 className="pb-1 font-bold text-xl text-center border-b border-b-gray-500">Help</h1>
                                    <ul className="px-1">
                                        <li className="cursor-pointer select-none hover:text-blue-400 transition duration-200 text-center pt-1"><Link href="/dashboard/settings">Account Settings</Link></li>
                                    </ul>
                                </section>
                                <section className=" flex justify-center p-2">
                                    <button className=" text-red-500 hover:text-red-600 transition duration-200" onClick={() => signOut({ redirect: true, callbackUrl: `${window.location.origin}/loginPage`, })}>Sign Out</button>
                                </section>
                            </div>
                            : null
                    }
                </section>
            </nav>
        </>
    );
}
