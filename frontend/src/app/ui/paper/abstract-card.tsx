export default function AbstractCard({ description } : { description: string }) {
    return (
        <div className="relative w-full h-full z-0">
            <div className="absolute -inset-1 bg-gradient-to-br from-royalBlue/75 to-fuchsia-400/75 blur-md rounded-[8px] z-0"></div>
            <div className="relative flex flex-col items-start justify-center gap-3 p-8 w-full h-full bg-white/70 rounded-[8px] overflow-y-auto">
                <h1 className="font-extrabold text-royalPurple text-3xl">Abstract</h1>
                <div className="w-full h-[14vh] overflow-y-auto">
                    <p className="text-base leading-[1.6] text-royalPurple">{description}</p>
                </div>
            </div>
        </div>
    )
}