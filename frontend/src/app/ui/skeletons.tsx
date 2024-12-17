import { BookOpenIcon, CalendarIcon, HandThumbDownIcon, HandThumbUpIcon, LinkIcon } from "@heroicons/react/24/solid";

const shimmer =
  'before:absolute before:-inset-2 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-royalPurple/10 before:to-transparent';


function PaperDetailsSkeleton() {
    return (
        <div className="relative w-full z-0">
            <div className="absolute -inset-1 bg-gradient-to-tr from-royalBlue/30 to-fuchsia-400/30 blur-md rounded-[8px] z-0"></div>
            <div className={`${shimmer} relative overflow-hidden grid md:grid-cols-3 gap-6 p-8 bg-white/70 backdrop-blur-sm rounded-[8px] border border-white/20`}>
                <div className="flex items-center space-x-3 group">
                    <div className="p-2 rounded-full bg-gradient-to-br from-royalBlue/10 to-fuchsia-400/10 group-hover:from-royalBlue/20 group-hover:to-fuchsia-400/20 transition-all">
                        <CalendarIcon className="w-5 h-5 text-royalPurple" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-royalPurple/70">Published</h3>
                        <div className="rounded-[6px] w-24 h-5 bg-royalPurple/20" />
                    </div>
                </div>

                <div className="flex items-center space-x-3 group">
                    <div className="p-2 rounded-full bg-gradient-to-br from-royalBlue/10 to-fuchsia-400/10 group-hover:from-royalBlue/20 group-hover:to-fuchsia-400/20 transition-all">
                        <LinkIcon className="w-5 h-5 text-royalPurple" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-royalPurple/70">DOI</h3>
                    </div>
                </div>

                <div className="flex items-center space-x-3 group">
                    <div className="p-2 rounded-full bg-gradient-to-br from-royalBlue/10 to-fuchsia-400/10 group-hover:from-royalBlue/20 group-hover:to-fuchsia-400/20 transition-all">
                        <BookOpenIcon className="w-5 h-5 text-royalPurple" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-royalPurple/70">Semantic Scholar</h3>
                        <p className="text-royalPurple font-medium">
                            View on Semantic Scholar
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AbstractCardSkeleton() {
    return (
        <div className="relative w-full z-0">
            <div className="absolute -inset-1 bg-gradient-to-br from-royalBlue/65 to-fuchsia-400/65 blur-md rounded-[8px] z-0 animate-pulse-slow"></div>
            <div className={`${shimmer} relative overflow-hidden flex flex-col items-start justify-center gap-3 p-8 w-full bg-white/70 backdrop-blur-sm rounded-[8px] border border-white/20`}>
                <h1 className="font-extrabold text-royalPurple text-3xl bg-gradient-to-r from-royalBlue/75 to-fuchsia-500/75 bg-clip-text text-transparent">Abstract</h1>
                <div className="flex flex-col items-center justify-center gap-2 w-full max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-royalPurple/20 scrollbar-track-transparent pr-2">
                    { Array.from(Array(4).keys()).map((key) => (
                        <div key={key} className="rounded-[6px] w-full h-5 bg-royalPurple/20" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export function PaperSkeleton() {
    return (
        <div className="flex flex-col items-center w-full h-full py-4 overflow-x-hidden">
            <div className="w-[93.75%] space-y-2">
                <div className={`${shimmer} relative overflow-hidden rounded-[6px] w-96 h-16 bg-royalPurple/20`} />
                <div className={`${shimmer} relative overflow-hidden rounded-[6px] w-48 h-8 bg-royalPurple/20`} />
            </div>

            <div className="w-[93.75%] mt-8 space-y-6">
                <PaperDetailsSkeleton />
                <AbstractCardSkeleton />
                
                <div className="flex gap-4 w-full">
                    <button 
                        disabled
                        className="relative flex-1 group"
                    >
                        <div className="relative flex items-center justify-center gap-2 py-3 bg-royalPurple rounded-[8px] border border-white/20 text-white font-bold">
                            <HandThumbUpIcon className="w-5 h-5" />
                            Good
                        </div>
                    </button>
                    <button 
                        disabled
                        className="relative flex-1 group"
                    >
                        <div className="relative flex items-center justify-center gap-2 py-3 bg-royalPurple/80 rounded-[8px] border border-white/20 text-white font-bold">
                            <HandThumbDownIcon className="w-5 h-5" />
                            Bad
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}