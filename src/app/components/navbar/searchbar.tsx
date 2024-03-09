"use client"
import React, {useState} from "react";
import { IoIosSearch } from "react-icons/io";
type SearchProps = {
    isExpanded: boolean;
    handleClick: () => void;
    handleUnClick: () => void;
  };
export default function Searchbar({ isExpanded, handleClick, handleUnClick }: SearchProps) {
    return (
        <div className="flex gap-0 drop-shadow-md customWidth transition  hover:-translate-y-0.5 justify-end">
            <input type="text" placeholder="Search" className={` flex pl-4 py-2 pr-2 rounded-l-full border-l border-t border-b border-black ${isExpanded? "w-full grow-[2]":" w-7/12"} focus:outline-none `} onClick={handleClick}
                    onBlur={handleUnClick}/>
            <button className="bg-white border-r border-t border-b border-black pr-3 rounded-r-full text-xl">
                <IoIosSearch />
            </button>   
        </div>
    );
}