import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function Searchbar() {
    return (
        <div className="flex gap-0 drop-shadow-md customWidth">
            <input type="text" placeholder="Search" className="pl-4 py-2 pr-2 rounded-l-full border-l border-t border-b border-black w-full focus:outline-none"/>
            <button className="bg-white border-r border-t border-b border-black pr-3 rounded-r-full text-xl">
                <IoIosSearch />
            </button>
        </div>
    );
}