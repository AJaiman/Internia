"use client"
import Image from "next/image";
import React, {useState} from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import FrontPageStat from "./components/front-page-stat";
import LoginSignUp from "./components/navbar/login";
import Searchbar from "./components/navbar/searchbar";
export default function Home() {
  const [isExpanded, setIsExpanded]=useState(false);
    const handleClick =() => {
        setIsExpanded(true);
    }
    const handleUnClick =() => {
        setIsExpanded(false);
    }
  return (
    <>
    
    {/* Parent of Section 1 */}
    <div className="relative">
      {/* Background of Section 1 */}
      <div className="trap1"></div>
      {/* Content of Section 1 */}
      <div className="absolute top-0 left-0 pt-[20px] pl-[50px] pr-[30px] w-full">
      <nav className="flex h-10 py-2 px-20 justify-between ">
            <div className="flex items-center gap-2 justify-start">
                <h1 className="text-xl">Monkey Type</h1>
            </div>
            <div className="flex items-center gap-2 flex-grow justify-end"> 
                <Searchbar isExpanded={isExpanded}
        handleClick={handleClick}
        handleUnClick={handleUnClick}/>
            </div>
            <div className="flex items-center gap-2 ">
                 <LoginSignUp />
            </div>
        </nav>
        {isExpanded && (
        <div className="absolute left-0  inset-y-24 w-full h-screen backdrop-blur-xl z-10 "></div>
                      )}
        <div className="flex justify-between mt-28 px-24 ">
          <section className="flex flex-col gap-3">
            <div>
              <h1 className="text-7xl font-bold">A <span className="text-orange-600">&nbsp;Network</span></h1>
              <h1 className="text-7xl font-bold">For High-Schoolers.</h1>
            </div>
            <p className="py-5 text-lg max-w-80 text-wrap"><span className="text-orange-600">Find&nbsp;</span>Internships.<span className="text-orange-600">&nbsp;Find&nbsp;</span>Programs.<span className="text-orange-600">&nbsp;Connect&nbsp;</span>with peers. Made simple with<span className="italic">&nbsp;Internia.&nbsp;</span></p>
            <button className="max-w-fit flex items-center rounded-full text-white bg-orange-600 py-2 pl-4 pr-3 hover:bg-orange-400 transition duration-200">Explore Now<MdKeyboardArrowRight className="text-xl"/></button>
          </section>
          <section>
            <img className="size-96 rounded-lg border border-black" src="placeholderimage.png" alt="Nun"/>
          </section>
        </div>
        <div className="flex justify-between absolute top-[85%] left-0 min-w-full px-44 ">
          <FrontPageStat mainPart={'25+'} subPart={'Professors'} padding={'pt-10'}/>
          <FrontPageStat mainPart={'100+'} subPart={'High-Schoolers'} padding={'pb-16'}/>
          <FrontPageStat mainPart={'5+'} subPart={'Colleges'} padding={'pt-10'}/>
        </div>
      </div>
    </div>
    </>
  );
}
