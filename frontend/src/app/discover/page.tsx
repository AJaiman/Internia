"use client"

import RecommendedPaper from "@/app/ui/discover/recommended-paper";
import { useEffect, useState } from "react";
import { LongformPublication, SearchResult } from "@/app/lib/types";
import { isLongformPublication } from "@/app/lib/utils";
import { useSession } from "next-auth/react";

export default function Page() {
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
    

    // Simplify searchResults to just show papers
    let searchResults: SearchResult[] = recommendedPapers.map((paper) => ({ 
        match: paper.match, 
        result: paper
    }))

    // Sort search results by the match %
    searchResults.sort((a, b) => a.match - b.match).reverse()

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="self-center w-[85%] flex flex-col -mt-4">
            <div className="mt-4 h-[65vh] overflow-y-scroll px-4">
                {
                    searchResults.map((obj, index) => <div key={index} className="py-4">
                        <RecommendedPaper publication={obj.result} />
                    </div>)
                }
            </div>
        </div>
    )
}