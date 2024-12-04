import { CalendarIcon, LinkIcon } from "@heroicons/react/24/solid"
import PaperCard from "@/app/ui/paper/paper-card"
import AbstractCard from "@/app/ui/paper/abstract-card"
import PaperContent from "@/app/ui/paper/paper-content"
import { LongformPublication } from "@/app/lib/types"
import ProfessorCard from "@/app/ui/paper/author-card"
import PaperDetailsCard from "@/app/ui/paper/paper-details-card"

export default function IndividualPaper({
    publication,
    isRecommended = false
}: {
    publication: LongformPublication,
    isRecommended?: boolean
}) {
    return (
        <div className="flex flex-col items-center w-full h-full py-4 overflow-x-hidden">
            {/* Title Section */}
            <div className="w-[93.75%] space-y-2">
                <h1 className="font-black text-4xl text-royalPurple">{publication.name}</h1>
                {isRecommended && 
                    <h2 className="text-lg text-royalPurple font-light">You might like this paper.</h2>
                }
            </div>

            {/* Main Content */}
            <div className="w-[93.75%] mt-8 space-y-6">
                <PaperDetailsCard 
                    publishDate={publication.fullDate}
                    doi={publication.link}
                />
                <AbstractCard description={publication.abstract} />
            </div>
        </div>
    )
}