import { Publication } from "@/app/lib/types";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function PublicationCard({ publication } : { publication: Publication }) {
    // Truncate name at the maximum length
    const publicationName = publication.name.length > 56 ? publication.name.slice(0, 30) + "..." : publication.name
    const authors = publication.authors
        .map((author) => author.name.split(/\s+/).slice(-1)[0])
        .join(", ")

    return (
        <div className="flex flex-row w-full h-20">
            <div className="flex flex-col justify-center pl-4 flex-1 h-20 bg-white/80 rounded-l-[6px] border border-royalPurple/30 border-r-0">
                <h1 className="text-base font-bold text-royalPurple">{publicationName}</h1>
                <h1 className="text-xs text-royalPurple">{authors}</h1>
                <h1 className="text-xs text-royalPurple">{publication.yearPublished}</h1>
            </div>
            <Link href="/discover/paper/owueroiweur" className="group flex items-center justify-center w-20 h-20 rounded-r-[6px] bg-white/50 border border-royalPurple/30 border-l-0">
                <ArrowRightIcon className="w-8 h-8 text-royalPurple transition group-hover:scale-125" />
            </Link>
        </div>
    )
}