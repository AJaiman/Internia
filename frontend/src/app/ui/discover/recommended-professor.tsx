import { LongformProfessor } from "@/app/lib/types";
import { AcademicCapIcon, BookOpenIcon, BuildingLibraryIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FavoritePill from "@/app/ui/favorite-pill";

export default function RecommendedProfessor({ professor, addFavoriteButton = false } : { professor: LongformProfessor, addFavoriteButton?: boolean }) {
    const truncatedDescription = professor.description.split(/\s+/).slice(0, 30).join(" ") + "..."

    // Hacky way to alternate the two components depending on whether or not there's a favorite button
    const MainComponent = addFavoriteButton ? "div" : Link
    const SecondaryComponent = addFavoriteButton ? Link : "h1"

    return (
        <MainComponent href="/discover/paper/placeholder-url" className={`relative flex-shrink-0 flex flex-row w-full h-32 transition ${addFavoriteButton ? '' : 'hover:translate-x-3'}`}>
            <div className="relative w-32 h-32 bg-royalBlue/75 rounded-l-xl">
                <UserIcon className="absolute left-1/2 -translate-x-1/2 top-[55%] -translate-y-1/2 w-16 h-16 text-royalPurple" />
                <AcademicCapIcon className="absolute left-[42%] -translate-x-1/2 top-[31%] -translate-y-1/2 w-8 h-8 text-royalPurple -rotate-[35deg]" />
            </div>
            <div className="flex flex-col flex-1 justify-around py-1 pl-8 h-full bg-royalBlue/20 rounded-r-xl">
                <div>
                    <SecondaryComponent href="/discover/paper/placeholder-url" className={`text-lg text-royalPurple font-bold ${addFavoriteButton ? 'hover:underline hover:text-royalBlue' : ''}`}>
                        {professor.name}
                    </SecondaryComponent>
                    <div className="w-4/5">
                        <p className="text-xs text-royalPurple font-light">
                            <span className="font-semibold">Description: </span>
                            {truncatedDescription}
                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                <div className="flex flex-row items-center gap-2 rounded-full px-3 py-1 border border-royalPurple/50">
                        <StarIcon className="text-royalPurple/75 w-4 h-4" />
                        <h1 className="text-xs text-royalPurple font-light"><span className="font-medium">{professor.match * 100}%</span> match</h1>
                    </div>
                    <div className="flex flex-row items-center gap-2 rounded-full px-3 py-1 border border-royalPurple/50">
                        <BuildingLibraryIcon className="text-royalPurple/75 w-4 h-4" />
                        <h1 className="text-xs text-royalPurple font-light">Professor at <span className="font-medium">{professor.university}</span></h1>
                    </div>
                    <div className="flex flex-row items-center gap-2 rounded-full px-3 py-1 border border-royalPurple/50">
                        <BookOpenIcon className="text-royalPurple/75 w-4 h-4" />
                        <h1 className="text-xs text-royalPurple font-light">In Dept. of <span className="font-medium">{professor.department}</span></h1>
                    </div>
                    { addFavoriteButton ? <FavoritePill /> : <></>}
                </div>
            </div>
        </MainComponent>
    )
}