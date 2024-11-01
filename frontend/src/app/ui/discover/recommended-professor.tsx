import { LongformProfessor } from "@/app/lib/types";
import { AcademicCapIcon, BookOpenIcon, BuildingLibraryIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function RecommendedProfessor({ professor } : { professor: LongformProfessor }) {
    const truncatedDescription = professor.description.split(/\s+/).slice(0, 30).join(" ") + "..."

    return (
        <Link href="/discover/paper/placeholder-url" className="relative flex-shrink-0 flex flex-row w-4/5 h-32 transition hover:translate-x-3">
            <div className="relative flex items-center justify-center w-32 h-32 bg-royalBlue/75 rounded-l-xl">
                <UserIcon className="w-16 h-16 text-royalPurple" />
                <AcademicCapIcon className="absolute left-[42%] -translate-x-1/2 top-[26%] -translate-y-1/2 w-8 h-8 text-royalPurple -rotate-[35deg]" />
            </div>
            <div className="flex flex-col flex-1 justify-around py-1 pl-8 h-full bg-royalBlue/20 rounded-r-xl">
                <div>
                    <h1 className="text-lg text-royalPurple font-bold">{professor.name}</h1>
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
                </div>
            </div>
        </Link>
    )
}