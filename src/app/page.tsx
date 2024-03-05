import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import { MdKeyboardArrowRight } from "react-icons/md";

//

export default function Home() {
  return (
    <>
    {/* Parent of Section 1 */}
    <div className="relative border border-black">
      {/* Bacground of Section 1 */}
      <div className="trap1"></div>
      <div className="absolute top-0 left-0 pt-[15px] pl-[50px] pr-[30px] w-full">
        <Navbar />
        <div className="flex justify-between mt-28 px-20">
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
        
      </div>
    </div>
    </>
  );
}
