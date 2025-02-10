'use client'

import React, { useEffect, useState } from "react";
import Paper from "@/app/ui/paper/paper";
import { useSession } from "next-auth/react";
import { LongformPublication } from "@/app/lib/types";
import { PaperSkeleton } from "@/app/ui/skeletons";


export default function DashboardPage() {
    const paperThreshold = 10 // Updates list of recommended papers when the list is less than this threshold
    const { data: session } = useSession();
    const email = session?.user?.email;

    const [recommendedPaper, setRecommendedPaper] = useState<LongformPublication>();
    const [refreshTrigger, setRefreshTrigger] = useState(false);

    const handleFeedbackSubmit = () => {
        setRefreshTrigger(prev => !prev)
        window.location.reload()
    }

    useEffect(() => {
        const getRecommendedPaper = async () => {
            if (email) {
                try {
                    console.log(process.env.NEXT_PUBLIC_API_URL)
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/recommended-papers/${email}`);
                    if (response.ok) {
                        const data = await response.json()
                        const papers = data.papers
                        if (papers.length < paperThreshold) {
                            const newPapers = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/paper/recommendations/${email}`)
                            if (!newPapers.ok) {
                                console.error("Error fetching new papers:", newPapers.statusText);
                            } else {
                                console.log(newPapers)
                            }
                        }

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
                            semanticLink: papers[0].url || null,
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
            }   
        }
        getRecommendedPaper()
    }, [refreshTrigger]);

    if (!recommendedPaper) {
        return (
            <>
                <PaperSkeleton />
            </>
        )
    }

    return (
        <>
            <Paper
                publication={recommendedPaper}
                isRecommended={true}
                onFeedbackSubmit={handleFeedbackSubmit} />
        </>
    )
}