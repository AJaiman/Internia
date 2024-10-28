import EndorsementCard from "@/app/ui/endorsement-card";

export default function EndorsementCloud() {
    return (
        <div className="relative w-[58%] h-[75vh] z-0">
            {/** Center card */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-96 h-72 -inset-3 bg-gradient-to-br from-royalBlue/80 to-fuchsia-400/80 blur-md z-0"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 px-12 w-96 h-72 rounded-xl bg-white/80">
                <EndorsementCard 
                    name="Eric Huang" 
                    description="Student at Poolesville High School" 
                    quote='"Internia helped me find the perfect internship. I love Internia so much. Wow. Internia has changed my outlook on life. Chipotle taco bell."'
                    pathToImage="/eric_sehaj.png"
                    sizeOfCard="lg"
                />
            </div>

            {/** Outer topmost cards */}
            <div className="absolute left-1/3 -translate-x-1/2 top-[15%] -translate-y-1/2 w-60 h-32 -inset-3 bg-gradient-to-br from-royalBlue/70 to-fuchsia-400/70 blur-md z-0"></div>
            <div className="absolute left-1/3 -translate-x-1/2 top-[15%] -translate-y-1/2 flex flex-col items-center justify-center gap-2 px-6 w-60 h-32 rounded-xl bg-white/75">
                <EndorsementCard 
                    name="Eric Huang" 
                    description="Student at Poolesville High School" 
                    quote='"Very cool tool, love using Internia."'
                    pathToImage="/eric_sehaj.png"
                    sizeOfCard="sm"
                />
            </div>

            <div className="absolute left-[66%] -translate-x-1/2 top-[15%] -translate-y-1/2 w-80 h-44 -inset-3 bg-gradient-to-br from-royalBlue/50 to-fuchsia-400/50 blur-md z-0"></div>
            <div className="absolute left-[66%] -translate-x-1/2 top-[15%] -translate-y-1/2 flex flex-col items-center justify-center gap-2 px-8 w-80 h-44 rounded-xl bg-white/70">
                <EndorsementCard 
                    name="Eric Huang" 
                    description="Student at Poolesville High School" 
                    quote='"Very cool tool, love using Internia."'
                    pathToImage="/eric_sehaj.png"
                    sizeOfCard="md"
                />
            </div>

            {/** Outer leftmost cards */}
            <div className="absolute left-[15%] -translate-x-1/2 top-[37.5%] -translate-y-1/2 w-48 h-32 -inset-3 bg-gradient-to-br from-royalBlue/50 to-fuchsia-400/50 blur-md z-0"></div>
            <div className="absolute left-[15%] -translate-x-1/2 top-[37.5%] -translate-y-1/2 flex flex-col items-center justify-center gap-2 px-6 w-48 h-32 rounded-xl bg-white/70">
                <EndorsementCard 
                    name="Eric Huang" 
                    description="Student at Poolesville High School" 
                    quote='"Internia is the shit, I love their website."'
                    pathToImage="/eric_sehaj.png"
                    sizeOfCard="xs"
                />
            </div>

            <div className="absolute left-[15%] -translate-x-1/2 top-[62.5%] -translate-y-1/2 w-48 h-40 -inset-3 bg-gradient-to-br from-royalBlue/40 to-fuchsia-400/40 blur-md z-0"></div>
            <div className="absolute left-[15%] -translate-x-1/2 top-[62.5%] -translate-y-1/2 flex flex-col items-center justify-center gap-2 px-6 w-48 h-40 rounded-xl bg-white/70">
                <EndorsementCard 
                    name="Arav Jaiman" 
                    description="Student at Poolesville High School" 
                    quote='"I love internia but only because my daddy Aran loves internia."'
                    pathToImage="/eric_sehaj.png"
                    sizeOfCard="xs"
                />
            </div>

            {/** Outer bottom-most cards */}
            <div className="absolute left-1/3 -translate-x-1/2 top-[85%] -translate-y-1/2 w-60 h-32 -inset-3 bg-gradient-to-br from-royalBlue/50 to-fuchsia-400/50 blur-md z-0"></div>
            <div className="absolute left-1/3 -translate-x-1/2 top-[85%] -translate-y-1/2 flex flex-col items-center justify-center gap-2 px-6 w-60 h-32 rounded-xl bg-white/70">
                <EndorsementCard 
                    name="Eric Huang" 
                    description="Student at Poolesville High School" 
                    quote='"Very cool tool, love using Internia."'
                    pathToImage="/eric_sehaj.png"
                    sizeOfCard="sm"
                />
            </div>

            <div className="absolute left-[66%] -translate-x-1/2 top-[85%] -translate-y-1/2 w-80 h-44 -inset-3 bg-gradient-to-br from-royalBlue/75 to-fuchsia-400/75 blur-md z-0"></div>
            <div className="absolute left-[66%] -translate-x-1/2 top-[85%] -translate-y-1/2 flex flex-col items-center justify-center gap-2 px-8 w-80 h-44 rounded-xl bg-white/80">
                <EndorsementCard 
                    name="Eric Huang" 
                    description="Student at Poolesville High School" 
                    quote='"Very cool tool, love using Internia."'
                    pathToImage="/eric_sehaj.png"
                    sizeOfCard="md"
                />
            </div>

            {/** Outer rightmost cards */}
            <div className="absolute left-[85%] -translate-x-1/2 top-[40%] -translate-y-1/2 w-48 h-32 -inset-3 bg-gradient-to-br from-royalBlue/40 to-fuchsia-400/40 blur-md z-0"></div>
            <div className="absolute left-[85%] -translate-x-1/2 top-[40%] -translate-y-1/2 flex flex-col items-center justify-center gap-2 px-6 w-48 h-32 rounded-xl bg-white/70">
                <EndorsementCard 
                    name="Eric Huang" 
                    description="Student at Poolesville High School" 
                    quote='"Internia is the shit, I love their website."'
                    pathToImage="/eric_sehaj.png"
                    sizeOfCard="xs"
                />
            </div>

            <div className="absolute left-[85%] -translate-x-1/2 top-[60%] -translate-y-1/2 w-48 h-36 -inset-3 bg-gradient-to-br from-royalBlue/50 to-fuchsia-400/50 blur-md z-0"></div>
            <div className="absolute left-[85%] -translate-x-1/2 top-[60%] -translate-y-1/2 flex flex-col items-center justify-center gap-2 px-6 w-48 h-36 rounded-xl bg-white/70">
                <EndorsementCard 
                    name="Shayaan Wadkar" 
                    description="Student at Poolesville High School" 
                    quote='"I love internia and I also love Chipotle."'
                    pathToImage="/eric_sehaj.png"
                    sizeOfCard="xs"
                />
            </div>
        </div>
    )
}