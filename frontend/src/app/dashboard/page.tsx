'use client'

import React, { useEffect, useState } from "react";
import Paper from "../ui/paper/paper";
import { useSession } from "next-auth/react";
import { LongformPublication } from "../lib/types";
export default function DashboardPage() {
    const paperThreshold = 10 // Updates list of recommended papers when the list is less than this threshold
    const { data: session } = useSession();
    const email = session?.user?.email;

    const [recommendedPaper, setRecommendedPaper] = useState<LongformPublication>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getRecommendedPaper = async () => {
            if (email) {
                try {
                    const response = await fetch(`http://localhost:8000/user/recommended-papers/${email}`);
                    if (response.ok) {
                        const data = await response.json()
                        const papers = data.papers
                        if (papers.length < paperThreshold) {
                            const newPapers = await fetch(`http://localhost:8000/paper/recommendations/${email}`)
                            if (!newPapers.ok) {
                                console.error("Error fetching new papers:", newPapers.statusText);
                            } else {
                                console.log(newPapers)
                            }
                        }
                            console.log(papers)
                            const transformedPaper = {
                            name: papers[0].title || 'Untitled',
                            authors: papers[0].authors?.map((author: any) => ({
                                name: author.name || 'Unknown Author',
                                university: "UMD",
                                match: 0.99
                            })) || [],
                            yearPublished: papers[0].year || 'N/A',
                            fullDate: papers[0].publicationDate || null,
                            link: papers[0].externalIds?.DOI || null,
                            abstract: papers[0].abstract || 'No abstract available',
                            content: papers[0].openAccessPdf?.url,
                            match: 0.99,
                            id: papers[0].paperId
                        }
                        console.log(transformedPaper)
                        setRecommendedPaper(transformedPaper)
                    }

                } catch (error) {
                    console.error("Error fetching recommended paper:", error);
                }
                setIsLoading(false)
            }   
        }
        getRecommendedPaper()
    }, []);
    if (!recommendedPaper) {
        return <div>Loading...</div>
    }
    return (
        <>
            <Paper
                publication={recommendedPaper}
                isRecommended={true} />
        </>
    )
}