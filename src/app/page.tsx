import Image from "next/image";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <>
    {/* Parent of Section 1 */}
    <div className="relative">
      {/* Bacground of Section 1 */}
      <div className="trap1"></div>
      <div className="absolute top-0 left-0 pt-[15px] pl-[50px] pr-[30px] w-full">
        <Navbar />
        <div className="flex justify-between border border-black mt-20">
          <section className="px-2">
            <h1 className="text-6xl font-bold">Linkedin.</h1>
            <h1 className="text-6xl font-bold">For<span className="text-orange-600">&nbsp;High&nbsp;</span>Schoolers.</h1>
            <p className="py-5 text-lg max-w-80 text-wrap"><span className="text-orange-600">Find&nbsp;</span>Internships.<span className="text-orange-600">&nbsp;Find&nbsp;</span>Programs.<span className="text-orange-600">&nbsp;Connect&nbsp;</span>with peers. Made simple with<span className="italic">&nbsp;Internia.&nbsp;</span></p>
          </section>
          <section>
            <img className="border border-black size-96 rounded-lg" src="src/app/placeholderimage.png" alt="Nun" />
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
