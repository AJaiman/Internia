import { CalendarIcon, NewspaperIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { LongformPublication } from "@/app/lib/types";
import FavoritePill from "@/app/ui/favorite-pill";

export default function RecommendedPaper({ publication, addFavoriteButton = false } : { publication: LongformPublication, addFavoriteButton?: boolean }) {
    const truncatedAbstract = publication.abstract.split(/\s+/).slice(0, 30).join(" ") + "..."
    const truncatedAuthors = publication.authors.length <= 3 ? 
        publication.authors.map((author) => author.name.split(/\s+/).slice(-1)[0]).join(", ")
        : publication.authors[0].name.split(/\s+/).slice(-1)[0] + " et al."

    // Hacky way to alternate the two components depending on whether or not there's a favorite button
    const MainComponent = addFavoriteButton ? "div" : Link
    const SecondaryComponent = addFavoriteButton ? Link : "h1"

    return (
        <MainComponent href="/discover/paper/placeholder-url" className={`relative flex-shrink-0 flex flex-row w-full h-32 transition ${addFavoriteButton ? '' : 'hover:translate-x-3'}`}>
            <div className="flex items-center justify-center w-32 h-32 bg-royalBlue/75 rounded-l-xl">
                <NewspaperIcon className="w-16 h-16 text-royalPurple" />
            </div>
            <div className="flex flex-col flex-1 justify-around py-1 pl-8 h-full bg-royalBlue/20 rounded-r-xl">
                <div>
                    <SecondaryComponent href="/discover/paper/placeholder-url" className={`text-lg text-royalPurple font-bold ${addFavoriteButton ? 'hover:underline hover:text-royalBlue' : ''}`}>
                        {publication.name}
                    </SecondaryComponent>
                    <div className="w-4/5">
                        <p className="text-xs text-royalPurple font-light">
                            <span className="font-semibold">Synopsis: </span>
                            {truncatedAbstract}
                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                <div className="flex flex-row items-center gap-2 rounded-full px-3 py-1 border border-royalPurple/50">
                        <StarIcon className="text-royalPurple/75 w-4 h-4" />
                        <h1 className="text-xs text-royalPurple font-light"><span className="font-medium">{publication.match * 100}%</span> match</h1>
                    </div>
                    <div className="flex flex-row items-center gap-2 rounded-full px-3 py-1 border border-royalPurple/50">
                        <CalendarIcon className="text-royalPurple/75 w-4 h-4" />
                        <h1 className="text-xs text-royalPurple font-light">Published <span className="font-medium">{publication.fullDate}</span></h1>
                    </div>
                    <div className="flex flex-row items-center gap-2 rounded-full px-3 py-1 border border-royalPurple/50">
                        <UserIcon className="text-royalPurple/75 w-4 h-4" />
                        <h1 className="text-xs text-royalPurple font-light">Authored by <span className="font-medium">{truncatedAuthors}</span></h1>
                    </div>
                    { addFavoriteButton ? <FavoritePill /> : <></>}
                </div>
            </div>
        </MainComponent>
    )
}