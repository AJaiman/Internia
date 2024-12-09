'use client'

import { CalendarIcon, LinkIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import AbstractCard from "@/app/ui/paper/abstract-card";
import PaperDetailsCard from "@/app/ui/paper/paper-details-card";
import { LongformPublication } from "@/app/lib/types";
import { useSession } from "next-auth/react";

export default function Paper({
    publication,
    isRecommended = false,
    onFeedbackSubmit
}: {
    publication: LongformPublication,
    isRecommended?: boolean,
    onFeedbackSubmit: () => void
}) {
    const { data: session } = useSession();
    const email = session?.user?.email;

    const removePaperFromRecommended = async () => {
        if (email) {
            try {
                await fetch(`http://localhost:8000/user/recommended-papers/${email}/${publication.id}`, {
                    method: 'DELETE'
                });
            } catch (error) {
                console.error('Error removing paper from recommendations:', error);
            }
        }
    };

    const addPaperToHistory = async () => {
        if (email) {
            try {
                await fetch(`http://localhost:8000/user/paper-history/${email}/${publication.id}`, {
                    method: 'POST'
                });
            } catch (error) {
                console.error('Error adding paper to history:', error);
            }
        }
    };

    const handleGood = async () => {
        if (email) {
            try {
                await fetch(`http://localhost:8000/user/liked-papers/${email}/${publication.id}`, {
                    method: 'POST'
                });
                await removePaperFromRecommended();
                await addPaperToHistory();
                onFeedbackSubmit();
            } catch (error) {
                console.error('Error liking paper:', error);
            }
        }
    };

    const handleBad = async () => {
        if (email) {
            try {
                await fetch(`http://localhost:8000/user/disliked-papers/${email}/${publication.id}`, {
                    method: 'POST'
                });
                await removePaperFromRecommended();
                await addPaperToHistory();
                onFeedbackSubmit();
            } catch (error) {
                console.error('Error disliking paper:', error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center w-full h-full py-4 overflow-x-hidden">
            <div className="w-[93.75%] space-y-2">
                <h1 className="font-black text-4xl text-royalPurple">{publication.name}</h1>
                {isRecommended && 
                    <h2 className="text-lg text-royalPurple font-light">You might like this paper.</h2>
                }
            </div>

            <div className="w-[93.75%] mt-8 space-y-6">
                <PaperDetailsCard 
                    publishDate={publication.fullDate}
                    doi={publication.link}
                    scholarLink={publication.semanticLink}
                />
                <AbstractCard description={publication.abstract} />
                
                <div className="flex gap-4 w-full">
                    <button 
                        onClick={handleGood}
                        className="relative flex-1 group"
                    >
                        <div className="relative flex items-center justify-center gap-2 py-3 bg-royalPurple hover:bg-royalPurple/90 rounded-[8px] border border-white/20 text-white font-bold">
                            <HandThumbUpIcon className="w-5 h-5" />
                            Good
                        </div>
                    </button>
                    <button 
                        onClick={handleBad}
                        className="relative flex-1 group"
                    >
                        <div className="relative flex items-center justify-center gap-2 py-3 bg-royalPurple/80 hover:bg-royalPurple/70 rounded-[8px] border border-white/20 text-white font-bold">
                            <HandThumbDownIcon className="w-5 h-5" />
                            Bad
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}