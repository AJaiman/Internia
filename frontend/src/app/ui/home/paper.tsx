import { CalendarIcon, LinkIcon } from "@heroicons/react/24/solid"

export default function Paper({
    name,
    isRecommended = false
}: {
    name: string,
    isRecommended?: boolean
}) {
    return (
        <div className="flex flex-col w-4/5 h-4/5 py-4">
            <div className="flex flex-row gap-8 items-center justify-between">
                <div className="basis-1/2 h-full space-y-4">
                    <div className="-space-y-1">
                        <h1 className="font-black text-4xl text-royalPurple">{name}</h1>
                        {
                            isRecommended && <h1 className="text-lg text-royalPurple font-light">You might like this paper.</h1>
                        }
                    </div>
                    <div className="space-y-2">
                        <div className="flex flex-row items-center justify-start gap-6 w-full h-16 rounded-[8px] bg-mutedPurple border border-royalPurple/50">
                            <div className="rounded-l-[8px] flex items-center justify-center w-16 h-16 bg-white/20">
                                <CalendarIcon className="text-royalPurple w-9 h-9" />
                            </div>
                            <h1 className="text-lg"><strong>Published:</strong> June 2022</h1>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-6 w-full h-16 rounded-[8px] bg-mutedPurple border border-royalPurple/50">
                            <div className="rounded-l-[8px] flex items-center justify-center w-16 h-16 bg-white/20">
                                <LinkIcon className="text-royalPurple w-9 h-9" />
                            </div>
                            <h1 className="text-lg"><strong>DOI:</strong> <a href="https://doi.org/20324iowuer" className="underline hover:text-royalPurple/75">https://doi.org/2oi23u489</a></h1>
                        </div>
                    </div>
                </div>
                <div className="basis-2/5 h-full">
                    <h1 className="font-black text-2xl text-royalPurple">{name}</h1>
                    {
                        isRecommended && <h1 className="text-lg text-royalPurple font-light -mt-1">You might like this paper.</h1>
                    }
                </div>
            </div>
        </div>
    )
}