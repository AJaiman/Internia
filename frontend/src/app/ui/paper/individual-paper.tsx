import { CalendarIcon, LinkIcon } from "@heroicons/react/24/solid"
import PaperCard from "@/app/ui/paper/paper-card"
import AbstractCard from "@/app/ui/paper/abstract-card"
import PaperContent from "@/app/ui/paper/paper-content"
import { LongformPublication } from "@/app/lib/types"
import ProfessorCard from "@/app/ui/paper/author-card"
import Slider from "@/app/ui/paper/slider"

export default function IndividualPaper({
    publication,
    isRecommended = false
}: {
    publication: LongformPublication,
    isRecommended?: boolean
}) {
    return (
        <div className="flex flex-col items-center w-full h-full py-4 overflow-x-hidden">
            <div className="-space-y-1 w-[93.75%]">
                <h1 className="font-black text-4xl text-royalPurple">{publication.name}</h1>
                {
                    isRecommended && <h1 className="text-lg text-royalPurple font-light">You might like this paper.</h1>
                }
            </div>
            <div className="w-[93.75%] space-y-2 mt-4">
                <PaperCard
                    label="Published"
                    description={publication.fullDate}
                    icon={CalendarIcon} />
                <PaperCard
                    label="DOI"
                    description={publication.link}
                    icon={LinkIcon}
                    isLink={true} />
            </div>
            <div className="flex flex-row w-[93.75%] h-[75%] items-start justify-between mt-4">
                <div className="basis-[47.5%] h-full">
                    <PaperContent content={publication.content} />
                </div>
                <div className="flex flex-col basis-[47.5%] h-full space-y-4">
                    <AbstractCard description={publication.abstract} />
                    
                    <div className="flex flex-col items-start justify-center gap-2 pl-8 w-full bg-white/60 border border-royalPurple/25 rounded-[6px] py-4">
                        <h1 className="text-xl text-royalPurple font-extrabold">Authors</h1>
                        <div className="w-full h-24">
                            <div className="flex flex-row flex-wrap gap-6 h-full overflow-y-auto">
                                {
                                    publication.authors.map((professor, index) => <ProfessorCard key={index} professor={professor} pathToImage="/eric_sehaj.png" />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}