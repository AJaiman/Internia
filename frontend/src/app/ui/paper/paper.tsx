'use client'

import { CalendarIcon, LinkIcon } from "@heroicons/react/24/solid"
import PaperCard from "@/app/ui/paper/paper-card"
import AbstractCard from "@/app/ui/paper/abstract-card"
import PaperContent from "@/app/ui/paper/paper-content"
import { LongformPublication } from "@/app/lib/types"
import ProfessorCard from "@/app/ui/paper/author-card"
import Slider from "@/app/ui/paper/slider"
import { useSession } from "next-auth/react"

export default function Paper({
    publication,
    isRecommended = false,
    onFeedbackSubmit
}: {
    publication: LongformPublication,
    isRecommended?: boolean,
    onFeedbackSubmit: () => void
}) {
    const { data: session } = useSession()
    const email = session?.user?.email

    const removePaperFromRecommended = async () => {
        if (email) {
            try {
                const response = await fetch(`http://localhost:8000/user/recommended-papers/${email}/${publication.id}`, {
                    method: 'DELETE'
                });
                if (!response.ok) {
                    console.error('Error removing paper from recommendations:', response.statusText);
                }
            } catch (error) {
                console.error('Error removing paper from recommendations:', error);
            }
        }
    }

    const addPaperToHistory = async () => {
        if (email) {
            try {
                const response = await fetch(`http://localhost:8000/user/paper-history/${email}/${publication.id}`, {
                    method: 'POST'
                });
                if (!response.ok) {
                    console.error('Error adding paper to history:', response.statusText);
                }
            } catch (error) {
                console.error('Error adding paper to history:', error);
            }
        }
    }

    const handleGood = async () => {
        console.log("Good")
        
        if (email) {
            try {
                const response = await fetch(`http://localhost:8000/user/liked-papers/${email}/${publication.id}`, {
                    method: 'POST'
                })
                if (!response.ok) {
                    console.error('Error liking paper:', response.statusText)
                }
                removePaperFromRecommended()
                addPaperToHistory()
                onFeedbackSubmit()
            } catch (error) {
                console.error('Error liking paper:', error)
            }
        }
    }

    const handleBad = async () => {
        console.log("Bad")
        if (email) {
            try {
                const response = await fetch(`http://localhost:8000/user/disliked-papers/${email}/${publication.id}`, {
                    method: 'POST'
                })
                if (!response.ok) {
                    console.error('Error disliking paper:', response.statusText)
                }
                removePaperFromRecommended()
                addPaperToHistory()
                onFeedbackSubmit()
            } catch (error) {
                console.error('Error disliking paper:', error)
            }
        }
    }

    return (
        <div className="flex flex-col items-center w-full h-full py-4">
            <div className="flex flex-row w-[93.75%] h-[34%] items-center justify-between">
                <div className="basis-[47.5%] h-full space-y-4">
                    <div className="-space-y-1">
                        <h1 className="font-black text-4xl text-royalPurple">{publication.name}</h1>
                        {
                            isRecommended && <h1 className="text-lg text-royalPurple font-light">You might like this paper.</h1>
                        }
                    </div>
                    <div className="space-y-2">
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
                </div>
                <div className="basis-[47.5%] h-full">
                    <AbstractCard description={publication.abstract} />
                </div>
            </div>
            <div className="flex flex-row items-center justify-between w-[93.75%] h-[66%] py-8">
                <div className="basis-[47.5%] h-full">
                    <PaperContent content={publication.content} />
                </div>
                <div className="flex flex-col items-center justify-between basis-[47.5%] h-full">
                    <div className="flex flex-col items-start justify-center gap-2 pl-8 w-full h-1/2 bg-white/60 border border-royalPurple/25 rounded-[6px]">
                        <h1 className="text-xl text-royalPurple font-extrabold">Authors</h1>
                        <div className="w-full h-2/3 overflow-x-auto">
                            <div className="flex flex-row flex-shrink-0 gap-6 w-[28vw] h-full overflow-x-scroll">
                                {
                                    publication.authors.map((professor, index) => <ProfessorCard key={index} professor={professor} pathToImage="/eric_sehaj.png" />)
                                }
                            </div>
                        </div>
                    </div>  
                    <button className="bg-royalPurple/75 hover:bg-royalPurple/50 w-full h-12 rounded-[6px] text-white font-bold" onClick={handleGood}>Good</button>
                    <button className="bg-royalPurple hover:bg-royalPurple/75 w-full h-12 rounded-[6px] text-white font-bold" onClick={handleBad}>Bad</button>
                </div>
            </div>
        </div>
    )
}