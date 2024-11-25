"use client"

import RecommendedPaper from "@/app/ui/discover/recommended-paper";
import RecommendedProfessor from "@/app/ui/discover/recommended-professor";
import { useEffect, useState } from "react";
import { LongformPublication, SearchResult } from "@/app/lib/types";
import { isLongformPublication } from "@/app/lib/utils";
import { useSession } from "next-auth/react";

export default function Page() {
    const [tab, setTab] = useState<"All" | "Papers" | "Professors">("All")
    const [recommendedPapers, setRecommendedPapers] = useState<LongformPublication[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const {data: session} = useSession()

    // Fetch recommended papers
    useEffect(() => { const fetchPapers = async () => {
        if (session?.user?.email) {
            try {
                const response = await fetch(`http://localhost:8000/user/recommended-papers/${session.user.email}`)
                console.log(response)
                if (response.ok) {
                    const data = await response.json()
                    const papers = data.papers
                    console.log(papers)
                    const transformedPapers = papers.map((paper: any) => {
                        return {
                            name: paper.title || 'Untitled',
                            authors: paper.authors?.map((author: any) => ({
                                name: author.name || 'Unknown Author', 
                                university: "UMD", 
                                match: 0.99
                            })) || [],
                            yearPublished: paper.year || 'N/A',
                            abstract: paper.abstract || 'No abstract available',
                            content: paper.openAcccessPdf?.url || null,
                            fullDate: paper.publicationDate || null,
                            link: paper.externalIds?.DOI || null,
                            match: 0.99,
                            id: paper.paperId
                        }
                    })
                    setRecommendedPapers(transformedPapers)
                }
            } catch (error) {
                console.error("Error fetching saved papers:", error)
            }
            setIsLoading(false)
        }
    }
        fetchPapers()
    }, [session])
    

    const recommendedProfessor = { 
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
    const recommendedProfessors = [recommendedProfessor, recommendedProfessor, recommendedProfessor]

    // Placeholder to generate search results
    let searchResults: SearchResult[] = [
        ...recommendedPapers.map((paper) => ({ match: paper.match, result: paper})),
        ...recommendedProfessors.map((professor) => ({ match: professor.match, result: professor }))
    ]

    if (tab == "Papers") { 
        searchResults = searchResults.filter((obj) => isLongformPublication(obj.result))
    }
    else if (tab == "Professors") {
        searchResults = searchResults.filter((obj) => !isLongformPublication(obj.result))
    }

    // Sort search results by the match %
    searchResults.sort((a, b) => a.match - b.match).reverse()

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="self-center w-[85%] flex flex-col -mt-4">
            <div className="flex flex-row h-8 gap-4">
                <button 
                  className={`text-royalPurple px-2 ${tab == 'All' ? 'border-b-2 border-royalPurple font-bold' : ''}`}
                  onClick={() => setTab("All")}>
                    All
                </button>
                <button 
                  className={`text-royalPurple px-2 ${tab == 'Papers' ? 'border-b-2 border-royalPurple font-bold' : ''}`}
                  onClick={() => setTab("Papers")}>
                    Papers
                </button>
                <button 
                  className={`text-royalPurple px-2 ${tab == 'Professors' ? 'border-b-2 border-royalPurple font-bold' : ''}`}
                  onClick={() => setTab("Professors")}>
                    Professors
                </button>
            </div>
            <div className="mt-4 h-[65vh] overflow-y-scroll px-4">
                {
                    searchResults.map((obj, index) => <div key={index} className="py-4">
                        {
                            isLongformPublication(obj.result) 
                            ? <RecommendedPaper publication={obj.result} /> 
                            : <RecommendedProfessor professor={obj.result} />
                        }
                    </div>)
                }
            </div>
        </div>
    )
}