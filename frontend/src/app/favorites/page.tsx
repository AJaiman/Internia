"use client"

import { useEffect, useState } from "react"
import Paginator from "@/app/ui/paginator"
import RecommendedPaper from "@/app/ui/discover/recommended-paper"
import RecommendedProfessor from "@/app/ui/discover/recommended-professor"
import { LongformProfessor, LongformPublication } from "@/app/lib/types"
import { useSession } from "next-auth/react"

export default function Page() {
    const [tab, setTab] = useState<"Papers" | "Professors">("Papers")
    const [savedPapers, setSavedPapers] = useState<LongformPublication[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const {data: session} = useSession()

    // Fetch Saved Papers
    useEffect(() => { const fetchPapers = async () => {
        if (session?.user?.email) {
            try {
                const response = await fetch(`http://localhost:8000/user/saved-papers/${session.user.email}`)
                if (response.ok) {
                    const data = await response.json()
                    const papers = data.papers
                    console.log(papers)
                    const transformedPapers = papers.map((paper: any) => {
                        return {
                            name: paper.title,
                            authors: paper.authors.map((author: any) => ({name: author.name, university: "UMD", match: 0.99})),
                            yearPublished: paper.year,
                            abstract: paper.abstract,
                            content: paper.openAcccessPdf?.url,
                            fullDate: paper.publicationDate,
                            link: paper.externalIds?.DOI,
                            match: 0.99,
                            id: paper.paperId
                        }
                    })
                    setSavedPapers(transformedPapers)
                }
            } catch (error) {
                console.error("Error fetching saved papers:", error)
            }
            setIsLoading(false)
        }
    }
    fetchPapers()
}, [session])

    // Placeholder that should be filled in later
    const viewedProfessor: LongformProfessor = { 
        name: "Eric Huang", 
        university: "UMD",
        match: 0.97, 
        fullUniversity: "University of Maryland",
        department: "Computer Science",
        type: "Associate Professor",
        description: `
        Eric Huang is a professor at UMD who is very passionate about computer science. This is a description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        `
    }

    const viewedProfessors = Array.from({ length: 10}, () => viewedProfessor)

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="self-center flex flex-col w-[70.3%] gap-4 h-full mt-8">
            <h1 className="font-black text-4xl text-royalPurple">Recently Favorited</h1>
            <div className="flex flex-row h-10 gap-4">
                <button 
                  className={`text-lg text-royalPurple px-6 ${tab == 'Papers' ? 'border-b-2 border-royalPurple font-bold' : ''}`}
                  onClick={() => setTab("Papers")}>
                    Papers ({ savedPapers.length })
                </button>
                <button 
                  className={`text-lg text-royalPurple px-6 ${tab == 'Professors' ? 'border-b-2 border-royalPurple font-bold' : ''}`}
                  onClick={() => setTab("Professors")}>
                    Professors ({ viewedProfessors.length })
                </button>
            </div>
            <div className="w-full h-full mt-4">
                <Paginator pageSize={4}>
                    { 
                        tab == 'Papers' 
                        ? savedPapers.map((paper, index) => <RecommendedPaper key={index} publication={paper} addFavoriteButton={true} isFavorited={true}/>)
                        : viewedProfessors.map((professor, index) => <RecommendedProfessor key={index} professor={professor} addFavoriteButton={true} isFavorited={true} />)
                    }
                </Paginator>
            </div>
        </div>
    )
}