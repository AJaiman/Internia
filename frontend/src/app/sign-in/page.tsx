import EndorsementCloud from "@/app/ui/endorsement-cloud";
import SignInButton from "@/app/ui/sign-in-button";

export default function Page() {
    return (
        <div className="flex flex-col justify-center w-full h-full px-24">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="w-[38%] space-y-6">
                    <div>
                        <h1 className="text-6xl text-royalPurple font-black">Join Internia.</h1>
                        <p className="text-2xl text-royalPurple font-light">
                            With the click of a button, you can start searching for interships
                            by sifting through recommended professors and papers to find the <span className="font-medium">perfect match</span> for you.
                        </p>
                    </div>
                    <SignInButton />
                </div>
                <EndorsementCloud />
            </div>
        </div>
    )
}