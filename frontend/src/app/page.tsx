import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import EndorsementCloud from "@/app/ui/endorsement-cloud";

export default function Page() {
    return (
        <div className="flex flex-col justify-center w-full h-full px-24">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="w-[38%] space-y-4">
                    <h1 className="text-6xl text-royalPurple leading-tight">Research Internships <span className="font-black">Made Easy.</span></h1>
                    <p className="text-2xl text-royalPurple font-light">
                        Finding internships has never been easier. With Internia, you'll be <span className="font-medium">recommended professors</span> based on your 
                        interests after <span className="font-medium">reading and rating internship papers</span> based off your interest towards them. 
                    </p>
                    <Link href="/sign-in" className="group flex items-center justify-center gap-2 bg-royalBlue hover:bg-blue-600 rounded-xl w-[22rem] h-12 font-bold text-white">
                        <p className="text-lg">Get Started</p>
                        <ArrowRightIcon className="w-5 h-5 transition group-hover:translate-x-1" />
                    </Link>
                </div>
                <EndorsementCloud />
            </div>
        </div>
    )
}