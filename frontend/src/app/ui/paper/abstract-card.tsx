export default function AbstractCard({ description } : { description: string }) {
    return (
        <div className="relative w-full z-0">
            <div className="absolute -inset-1 bg-gradient-to-br from-royalBlue/75 to-fuchsia-400/75 blur-md rounded-[8px] z-0 animate-pulse-slow"></div>
            <div className="relative flex flex-col items-start justify-center gap-3 p-8 w-full bg-white/70 backdrop-blur-sm rounded-[8px] border border-white/20">
                <h1 className="font-extrabold text-royalPurple text-3xl bg-gradient-to-r from-royalBlue to-fuchsia-500 bg-clip-text text-transparent">Abstract</h1>
                <div className="w-full max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-royalPurple/20 scrollbar-track-transparent pr-2">
                    <p className="text-base leading-[1.6] text-royalPurple">{description}</p>
                </div>
            </div>
        </div>
    )
}