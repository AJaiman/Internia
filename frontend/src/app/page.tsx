import EndorsementCloud from "@/app/ui/endorsement-cloud";
import SignInButton from "@/app/ui/sign-in-button";

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
                    <SignInButton />
                </div>
                <EndorsementCloud />
            </div>
        </div>
    )
}