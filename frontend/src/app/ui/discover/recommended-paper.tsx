import { CalendarIcon, NewspaperIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { LongformPublication } from "@/app/lib/types";
import FavoritePill from "@/app/ui/favorite-pill";
import { useSession } from "next-auth/react";

export default function RecommendedPaper({ publication, addFavoriteButton = false, isFavorited = false, onFavorite, onUnfavorite } : { publication: LongformPublication, addFavoriteButton?: boolean, isFavorited?: boolean, onFavorite?: () => void, onUnfavorite?: () => void }) {
    const {data: session} = useSession()
    let currentLength = 0;

    const truncatedAbstract = publication.abstract 
        ? publication.abstract.split(/\s+/).filter((word, index, arr) => {
            // Calculate the new length if this word were added
            const newLength = currentLength + (currentLength > 0 ? 1 : 0) + word.length;
    
            if (newLength > 275) {
                arr.splice(index); // Remove remaining words once the limit is exceeded
                return false;
            }
    
            currentLength = newLength;
            return true;
        }).join(" ") + "..."
        : "No abstract available";

    const truncatedAuthors = publication.authors.length <= 3 ? 
        publication.authors.map((author) => author.name.split(/\s+/).slice(-1)[0]).join(", ")
        : publication.authors[0].name.split(/\s+/).slice(-1)[0] + " et al."

    // Hacky way to alternate the two components depending on whether or not there's a favorite button
    const MainComponent = addFavoriteButton ? "div" : Link
    const SecondaryComponent = addFavoriteButton ? Link : "h1"

    const handleFavorite = () => {
        fetch(`http://localhost:8000/user/saved-papers/${session?.user?.email}/${publication.id}`, {
            method: 'POST',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to save paper');
            }
            console.log('Paper saved successfully');
            onFavorite?.()
        })
        .catch(error => {
            console.error('Error saving paper:', error);
        });
    }

    const handleUnfavorite = () => {
        fetch(`http://localhost:8000/user/saved-papers/${session?.user?.email}/${publication.id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to remove paper');
            }
            console.log('Paper removed successfully');
            onUnfavorite?.()
        })
        .catch(error => {
            console.error('Error removing paper:', error);
        });
    }

    return (
        <MainComponent href={`/discover/paper/${publication.id}`} className={`relative flex-shrink-0 flex flex-row w-full h-36 transition ${addFavoriteButton ? '' : 'hover:translate-x-3'}`}>
            <div className="flex items-center justify-center w-36 h-36 bg-royalBlue/75 rounded-l-xl">
                <NewspaperIcon className="w-16 h-16 text-royalPurple" />
            </div>
            <div className="flex flex-col flex-1 justify-around py-1 pl-8 h-full bg-royalBlue/20 rounded-r-xl">
                <div>
                    <SecondaryComponent href={`/discover/paper/${publication.id}`} className={`w-5/6 text-[16px] text-royalPurple font-bold ${addFavoriteButton ? 'hover:underline hover:text-royalBlue' : ''}`}>
                        {publication.name}
                    </SecondaryComponent>
                    <div className="w-5/6">
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
                    { addFavoriteButton ? <FavoritePill initialState={isFavorited} onFavorite={handleFavorite} onUnfavorite={handleUnfavorite} /> : <></>}
                </div>
            </div>
        </MainComponent>
    )
}