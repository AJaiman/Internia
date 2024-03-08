'use client'

import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import { MdKeyboardArrowRight } from "react-icons/md";
import FrontPageStat from "./components/front-page-stat";
import FieldSelection  from "./components/field-selection/field-selection";
import TypedText from "./components/typed-text";
import { InView } from "react-intersection-observer";
import { useState } from "react";

export default function Home() {

  //Animations

  //Typewriter Animation
  const [showTypedText, setShowTypedText] = useState(false);

  //Fade-In Section 2 Animation
  const [showSection2Info, setShowSection2Info] = useState(false);

  //Slide-In from Left Section 2 Animation
  const [showSection2SecondTitle, setShowSection2SecondTitle] = useState(false);

  return (
    <>
    {/* Parent of Section 1 */}
    <div className="relative h-[50rem]">
      {/* Bacground of Section 1 */}
      <div className="trap1"></div>
      {/* Content of Section 1 */}
      <div className="absolute top-0 left-0 pt-[20px] pl-[50px] pr-[30px] w-full">
        <Navbar />
        <div className="flex justify-between mt-28 px-24">
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
        <div className="flex justify-between absolute top-[85%] left-0 min-w-full px-44">
          <FrontPageStat mainPart={'25+'} subPart={'Professors'} padding={'pt-10'}/>
          <FrontPageStat mainPart={'100+'} subPart={'High-Schoolers'} padding={'pb-16'}/>
          <FrontPageStat mainPart={'5+'} subPart={'Colleges'} padding={'pt-10'}/>
        </div>
      </div>
    </div>

    {/* Parent of Section 2 */}
    <div className="relative">
      <div className="trap2"></div>
      <div className="absolute top-0 left-0 pt-[60px] pl-[10vw] pr-[5vw] w-full">
        <div className="flex justify-between items-center">
          {/* Top Info Text */}
          <section className="flex flex-col gap-[7vh] max-w-[40vw]">
            <InView onChange={(inView, entry) => {setShowTypedText(inView)}} triggerOnce>
              {showTypedText ? <TypedText /> : null}
            </InView>
            <div className="min-w-[30vw] min-h-[20vh]">
              <InView onChange={(inView, entry) => {setShowSection2Info(inView)}} threshold={0.3} triggerOnce>
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
          <section>
            <FieldSelection />
          </section>
        </div>
        <div className="flex justify-between items-center">
          <section className="flex flex-col">
            <InView onChange={(inView, entry) => {setShowSection2SecondTitle(inView)}}>
              {showSection2SecondTitle ? <h1 className="text-5xl gap-2 min-h-[20vh] min-w-[38vw] slideInAnim">
                <span className="text-orange-600 font-bold">Connect</span> with <span className="italic">your</span> peers.
              </h1> : null}
            </InView>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
