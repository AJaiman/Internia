'use client'

import { LongformPublication } from "@/app/lib/types";
import IndividualPaper from "@/app/ui/paper/individual-paper";
import { useEffect, useState } from "react";

export default function Page(props: { params: { id: string } }) {
    const id = props.params.id;
    const [isLoading, setIsLoading] = useState(true)
    const [publication, setPublication] = useState<LongformPublication>()
    
    // Fetch Paper Info
    useEffect(() => {
        const fetchPaper = async () => {
            try {
                const response = await fetch(`http://localhost:8000/paper/${id}`)
                if (response.ok) {
                    const paper = await response.json()
                    console.log(paper)
                    
                    // Check if paper exists and has required fields
                    if (!paper || !paper.title) {
                        console.error("Invalid paper data received:", paper)
                        setIsLoading(false)
                        return
                    }

                    const transformedPaper = {
                        name: paper.title,
                        authors: paper.authors?.map((author: any) => ({
                            name: author.name || 'Unknown Author',
                            university: "UMD",
                            match: 0.99
                        })) || [],
                        yearPublished: paper.year || 'N/A',
                        abstract: paper.abstract || 'No abstract available',
                        content: paper.openAccessPdf?.url || null,
                        semanticLink: paper.url || null,
                        fullDate: paper.publicationDate || null,
                        link: paper.externalIds?.DOI || null,
                        match: 0.99,
                        id: paper.paperId || id
                    }
                    setPublication(transformedPaper)
                } else {
                    console.error("Failed to fetch paper:", response.statusText)
                }
            } catch (error) {
                console.error("Error fetching paper:", error)
            }
            setIsLoading(false)
        }
        fetchPaper()
    }, [id])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!publication) {
        return <div>Failed to load paper details</div>
    }

    return (
        <>
            <IndividualPaper
                publication={{
                    name: publication.name,
                    authors: publication.authors,
                    yearPublished: publication.yearPublished,
                    fullDate: publication.fullDate,
                    link: publication.link,
                    abstract: publication.abstract,
                    content: publication.content,
                    semanticLink: publication.semanticLink,
                    match: publication.match,
                    id: publication.id
                }}
                isRecommended={false} />
        </>
    )
}