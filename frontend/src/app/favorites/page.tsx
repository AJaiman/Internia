"use client"

import { useEffect, useState } from "react"
import Paginator from "@/app/ui/paginator"
import RecommendedPaper from "@/app/ui/discover/recommended-paper"
import { LongformPublication } from "@/app/lib/types"
import { useSession } from "next-auth/react"

export default function Page() {
    const [savedPapers, setSavedPapers] = useState<LongformPublication[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const {data: session} = useSession()

    // Fetch Saved Papers
    useEffect(() => { const fetchPapers = async () => {
        if (session?.user?.email) {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/saved-papers/${session.user.email}`)
                console.log(response)
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

    const handleUnfavorite = () => {
        window.location.reload()
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (savedPapers.length === 0) {
        return (
            <div className="self-center flex flex-col w-[70.3%] gap-4 h-full mt-8">
                <h1 className="font-black text-4xl text-royalPurple">Recently Favorited</h1>
                <div className="mt-8 text-center text-gray-500">
                    No papers have been favorited yet.
                </div>
            </div>
        )
    }

    return (
        <div className="self-center flex flex-col w-[70.3%] gap-4 h-full mt-8">
            <h1 className="font-black text-4xl text-royalPurple">Recently Favorited</h1>
            <div className="w-full h-full mt-4">
                <Paginator pageSize={4}>
                    {savedPapers.map((paper, index) => 
                        <RecommendedPaper 
                            key={index} 
                            publication={paper} 
                            addFavoriteButton={true} 
                            isFavorited={true} 
                            onUnfavorite={handleUnfavorite}
                        />
                    )}
                </Paginator>
            </div>
        </div>
    )
}