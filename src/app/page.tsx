import Image from "next/image";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <>
    <div className="border border-black">
      <div className="trap1">
        <Navbar />
        <div className="flex gap-[30rem] mt-20">
          <section className="px-2 border border-black">
            <h1 className="text-3xl font-bold">Linkedin.</h1>
            <h1 className="text-3xl font-bold">For<span className="text-orange-600">&nbsp;High&nbsp;</span>Schoolers.</h1>
            <p className="py-5 text-lg max-w-80 text-wrap"><span className="text-orange-600">Find&nbsp;</span>Internships.<span className="text-orange-600">&nbsp;Find&nbsp;</span>Programs.<span className="text-orange-600">&nbsp;Connect&nbsp;</span>with peers. Made simple with<span className="italic">&nbsp;Internia.&nbsp;</span></p>
          </section>
          <section>
            <div className="border border-black bg-gray size-96 z-1"></div>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
