'use client'

import Image from "next/image";
import React, {useState} from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import FrontPageStat from "./components/front-page-stat";
import FieldSelection  from "./components/field-selection/field-selection";
import TypedText from "./components/typed-text";
import { InView } from "react-intersection-observer";
import Searchbar from "./components/navbar/searchbar";
import LoginSignUpButton from "./components/navbar/homePageLoginSignupButton";
import Founders from "./components/founders/founders";

export default function Home() {
  const [isExpanded, setIsExpanded]=useState(false);
    const handleClick =() => {
        setIsExpanded(true);
    }
    const handleUnClick =() => {
        setIsExpanded(false);
    }

  //Animations

  //Typewriter Animation
  const [showTypedText, setShowTypedText] = useState(false);

  //Fade-In Section 2 Animation
  const [showSection2Info, setShowSection2Info] = useState(false);
  const [showSection2Info2, setShowSection2Info2] = useState(false);

  //Slide-In from Left Section 2 Animation
  const [showSection2SecondTitle, setShowSection2SecondTitle] = useState(false);
  const [showExploreCommunitiesButton, setShowExploreCommunitiesButton] = useState(false);

  //Founders Animation
  const [showFounders, setShowFounders] = useState(false);
  const [showFoundersTitle, setShowFoundersTitle] = useState(false);

  return (
    <>
    
    {/* Parent of Section 1 */}
    <div className="relative h-[95vh]">
      {/* Bacground of Section 1 */}
      <div className="trap1"></div>
      {/* Content of Section 1 */}
      <div className="absolute top-0 left-0 pt-[3vh] pl-[2vw] pr-[1.5vw] w-full">
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
                 <LoginSignUpButton />
            </div>
      </nav>
        {isExpanded && (
        <div className="absolute left-0  inset-y-24 w-full h-screen backdrop-blur-xl z-10 "></div>
                      )}

        <div className="flex justify-between mt-[14vh] px-[7vw] ">
          <section className="flex flex-col gap-[1.5vh]">
            <div>
              <h1 className="text-7xl font-bold">A <span className="text-orange-600">&nbsp;Network</span></h1>
              <h1 className="text-7xl font-bold">For High-Schoolers.</h1>
            </div>
            <p className="py-5 text-lg max-w-[20vw] text-wrap"><span className="text-orange-600">Find&nbsp;</span>Internships.<span className="text-orange-600">&nbsp;Find&nbsp;</span>Programs.<span className="text-orange-600">&nbsp;Connect&nbsp;</span>with peers. Made simple with<span className="italic">&nbsp;Internia.&nbsp;</span></p>
            <button className="max-w-fit flex items-center rounded-full text-white bg-orange-600 py-2 pl-4 pr-3 hover:bg-orange-400 transition duration-200">Explore Now<MdKeyboardArrowRight className="text-xl"/></button>
          </section>
          <section>
            <img className="size-[50vh] rounded-lg border border-black" src="placeholderimage.png" alt="Nun"/>
          </section>
        </div>
        <div className="flex justify-between absolute top-[85%] left-0 min-w-full px-44 ">
          <FrontPageStat mainPart={'25+'} subPart={'Professors'} padding={'pt-10'}/>
          <FrontPageStat mainPart={'100+'} subPart={'High-Schoolers'} padding={'pb-16'}/>
          <FrontPageStat mainPart={'5+'} subPart={'Colleges'} padding={'pt-10'}/>
        </div>
      </div>
    </div>

    {/* Parent of Section 2 */}
    <div className="relative">
      {/* Background of Section 2 */}
      <div className="trap2"></div>
      {/* Content of Section 2 */}
      <div className="absolute flex flex-col gap-[10vh] top-0 left-0 pt-[60px] pl-[10vw] pr-[5vw] w-full">
        {/* Top section of Section 2 */}
        <div className="flex justify-between items-center">
          {/* Top Info Text */}
          <section className="flex flex-col gap-[7vh] max-w-[40vw]">
            <div className="min-h-[20vh]">
              <InView onChange={(inView, entry) => {setShowTypedText(inView)}} triggerOnce>
                {showTypedText ? <TypedText /> : null}
              </InView>
            </div>
            <div className="min-w-[30vw] min-h-[20vh]">
              <InView onChange={(inView, entry) => {setShowSection2Info(inView)}} triggerOnce>
                {showSection2Info ? <p className="max-w-[30vw] text-lg fadeInAnim">
                Finding internships has <span className="font-bold">never</span> been 
                simpler. Choose your <span className="text-orange-600">field of interest</span>, 
                location, and other relevant information, 
                and have <span className="text-orange-600">hundreds</span> of professors and 
                programs waiting at your fingertips. 
                </p> : null}
              </InView>
            </div>
          </section>
          {/* Icon Animation */}
          <section>
            <FieldSelection />
          </section>
        </div>
        {/* Bottom section of Section 2 */}
        <div className="flex justify-between items-center">
          {/* Bottom Info Text */}
          <section className="flex flex-col gap-[8vh]">
            <div className="min-h-[10vh]">
              <InView onChange={(inView, entry) => {setShowSection2SecondTitle(inView)}} triggerOnce>
                {showSection2SecondTitle ? <h1 className="text-5xl gap-2 min-h-[10vh] min-w-[38vw] slideInAnim">
                  <span className="text-orange-600 font-bold">Connect</span> with <span className="italic">your</span> peers.
                </h1> : null}
              </InView>
            </div>
            <div className="min-h-[15vh]">
              <InView onChange={(inView, entry) => {setShowSection2Info2(inView)}} triggerOnce>
                  {showSection2Info2 ? <p className="max-w-[30vw] text-lg fadeInAnim">
                  Finding internships has <span className="font-bold">never</span> been 
                  simpler. Choose your <span className="text-orange-600">field of interest</span>, 
                  location, and other relevant information, 
                  and have <span className="text-orange-600">hundreds</span> of professors and 
                  programs waiting at your fingertips. 
                  </p> : null}
              </InView>
            </div>
            <InView onChange={(inView, entry) => {setShowExploreCommunitiesButton(inView)}} triggerOnce>
              {showExploreCommunitiesButton ? <button className="slideInAnim max-w-fit flex items-center rounded-full text-white bg-orange-600 py-2 pl-4 pr-3 hover:bg-orange-400 transition duration-200">Explore Communities<MdKeyboardArrowRight className="text-xl"/></button> : null}
            </InView>
          </section>
        </div>
      </div>
    </div>

    {/* Parent of Section 3 */}
    <div className="relative">
      {/* Background of Section 3 */}
      <div className="trap3"></div>
      {/* Conent of Section 3 */}
      <div className="absolute flex flex-col gap-[5vh] top-0 left-0 w-full h-full pt-[5vh] pl-[3vw] pr-[5vw]">
        <InView onChange={(inView, entry) => setShowFoundersTitle(inView)} triggerOnce>
          {showFoundersTitle ? <h1 className="text-7xl font-bold text-orange-600 foundersTitleSlideInAnim">FOUNDERS:</h1> : null}
        </InView>
        <InView onChange={(inView, entry) => {setShowFounders(inView)}} triggerOnce>
          {showFounders ? <Founders /> : null}
        </InView>
      </div>
    </div>
    </>
  );
}
