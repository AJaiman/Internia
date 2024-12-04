import { CalendarIcon, LinkIcon, BookOpenIcon } from "@heroicons/react/24/outline";

interface PaperDetailsProps {
    publishDate: string;
    doi: string;
    scholarLink?: string;
}

export default function PaperDetailsCard({ publishDate, doi, scholarLink }: PaperDetailsProps) {
    return (
        <div className="relative w-full z-0">
            <div className="absolute -inset-1 bg-gradient-to-tr from-royalBlue/50 to-fuchsia-400/50 blur-md rounded-[8px] z-0"></div>
            <div className="relative grid md:grid-cols-3 gap-6 p-8 bg-white/70 backdrop-blur-sm rounded-[8px] border border-white/20">
                <div className="flex items-center space-x-3 group">
                    <div className="p-2 rounded-full bg-gradient-to-br from-royalBlue/10 to-fuchsia-400/10 group-hover:from-royalBlue/20 group-hover:to-fuchsia-400/20 transition-all">
                        <CalendarIcon className="w-5 h-5 text-royalPurple" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-royalPurple/70">Published</h3>
                        <p className="text-royalPurple font-medium">{publishDate}</p>
                    </div>
                </div>

                <div className="flex items-center space-x-3 group">
                    <div className="p-2 rounded-full bg-gradient-to-br from-royalBlue/10 to-fuchsia-400/10 group-hover:from-royalBlue/20 group-hover:to-fuchsia-400/20 transition-all">
                        <LinkIcon className="w-5 h-5 text-royalPurple" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-royalPurple/70">DOI</h3>
                        <a 
                            href={doi}
                            className="text-royalPurple font-medium hover:text-royalBlue transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View DOI
                        </a>
                    </div>
                </div>

                <div className="flex items-center space-x-3 group">
                    <div className="p-2 rounded-full bg-gradient-to-br from-royalBlue/10 to-fuchsia-400/10 group-hover:from-royalBlue/20 group-hover:to-fuchsia-400/20 transition-all">
                        <BookOpenIcon className="w-5 h-5 text-royalPurple" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-royalPurple/70">Semantic Scholar</h3>
                        <a 
                            href={scholarLink}
                            className="text-royalPurple font-medium hover:text-royalBlue transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Semantic Scholar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
