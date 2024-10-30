import { CalendarIcon, LinkIcon } from "@heroicons/react/24/solid"
import PaperCard from "@/app/ui/paper/paper-card"
import AbstractCard from "@/app/ui/paper/abstract-card"
import PaperContent from "@/app/ui/paper/paper-content"
import { Professor } from "@/app/lib/types"
import ProfessorCard from "@/app/ui/paper/author-card"
import Slider from "@/app/ui/paper/slider"

export default function Paper({
    name,
    isRecommended = false
}: {
    name: string,
    isRecommended?: boolean
}) {
    const professors: Professor[] = [
        {
            name: "Eric Huang",
            university: "UMD",
            match: 0.97
        },
        {
            name: "Eric Huang",
            university: "UMD",
            match: 0.91
        },
        {
            name: "Eric Huang",
            university: "UMD",
            match: 0.2
        },
        {
            name: "Eric Huang",
            university: "UMD",
            match: 0.1
        },
        {
            name: "Eric Huang",
            university: "UMD",
            match: 0.05
        }
    ]

    return (
        <div className="flex flex-col items-center w-full h-full py-4">
            <div className="flex flex-row w-[93.75%] h-[34%] items-center justify-between">
                <div className="basis-[47.5%] h-full space-y-4">
                    <div className="-space-y-1">
                        <h1 className="font-black text-4xl text-royalPurple">{name}</h1>
                        {
                            isRecommended && <h1 className="text-lg text-royalPurple font-light">You might like this paper.</h1>
                        }
                    </div>
                    <div className="space-y-2">
                        <PaperCard
                            label="Published"
                            description="June 2022"
                            icon={CalendarIcon} />
                        <PaperCard
                            label="DOI"
                            description="https://doi.org/20234iowuer"
                            icon={LinkIcon}
                            isLink={true} />
                    </div>
                </div>
                <div className="basis-[47.5%] h-full">
                    <AbstractCard description="Many people have eaten Chipotle and became obesity shortly after. Unfortunately, obesity is an epidemic and the spread of Chipotle is concerning. This paper dives into how fat people who eat Chipotle are: Chipotle is very bad for the human body. Do not eat chiptotle" />
                </div>
            </div>
            <div className="flex flex-row items-center justify-between w-[93.75%] h-[66%] py-8">
                <div className="basis-[47.5%] h-full">
                    <PaperContent content={`
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Congue velit nascetur blandit aptent nisi. Dictum auctor ac ullamcorper fames porta. Metus tellus imperdiet est taciti nisl. Ornare laoreet urna dictumst varius interdum dolor ligula. Elit facilisi ac donec ipsum sagittis cursus. Nostra magnis cras potenti per nisl tincidunt. Dolor consectetur gravida mi congue leo fames ultrices senectus. Hendrerit sagittis lectus massa purus penatibus; etiam adipiscing litora primis? Eu habitasse velit urna ex arcu fusce erat taciti.

                        Penatibus torquent eget nisi aenean habitant ridiculus diam. Dictum lorem erat hendrerit molestie aenean metus elementum? Ante tristique inceptos etiam porta vulputate nascetur odio. Elit quisque nisi elit placerat nisl ad. Cubilia suscipit litora dolor lobortis penatibus cras. Natoque enim natoque commodo ultricies ligula fames laoreet torquent finibus! Nostra sit fermentum nullam donec morbi malesuada luctus. Vehicula diam ex lacus nisi luctus blandit morbi. Dui class congue conubia facilisis integer consectetur ante ultrices.

                        Lorem ipsum odor amet, consectetuer adipiscing elit. Congue velit nascetur blandit aptent nisi. Dictum auctor ac ullamcorper fames porta. Metus tellus imperdiet est taciti nisl. Ornare laoreet urna dictumst varius interdum dolor ligula. Elit facilisi ac donec ipsum sagittis cursus. Nostra magnis cras potenti per nisl tincidunt. Dolor consectetur gravida mi congue leo fames ultrices senectus. Hendrerit sagittis lectus massa purus penatibus; etiam adipiscing litora primis? Eu habitasse velit urna ex arcu fusce erat taciti.

Penatibus torquent eget nisi aenean habitant ridiculus diam. Dictum lorem erat hendrerit molestie aenean metus elementum? Ante tristique inceptos etiam porta vulputate nascetur odio. Elit quisque nisi elit placerat nisl ad. Cubilia suscipit litora dolor lobortis penatibus cras. Natoque enim natoque commodo ultricies ligula fames laoreet torquent finibus! Nostra sit fermentum nullam donec morbi malesuada luctus. Vehicula diam ex lacus nisi luctus blandit morbi. Dui class congue conubia facilisis integer consectetur ante ultrices.


                    `} />
                </div>
                <div className="basis-[47.5%] h-full">
                    <div className="flex flex-col items-start justify-center gap-2 pl-8 w-full h-1/2 bg-white/60 border border-royalPurple/25 rounded-[6px]">
                        <h1 className="text-xl text-royalPurple font-extrabold">Authors</h1>
                        <div className="w-full h-2/3 overflow-x-auto">
                            <div className="flex flex-row flex-shrink-0 gap-6 w-[28vw] h-full overflow-x-scroll">
                                {
                                    professors.map((professor, index) => <ProfessorCard key={index} professor={professor} pathToImage="/eric_sehaj.png" />)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-1/2">
                        <div className="flex flex-row items-center justify-center gap-8 w-full h-1/2">
                            <div className="w-1/2 space-y-2">
                                <h1 className="text-xl text-royalPurple font-bold">Interest</h1>
                                <Slider />
                            </div>
                            <div className="w-1/2 space-y-2">
                                <h1 className="text-xl text-royalPurple font-bold">Readibility</h1>
                                <Slider />
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-8 w-full h-1/3">
                            <button className="bg-royalPurple/75 hover:bg-royalPurple/50 w-1/2 h-12 rounded-[6px] text-white font-bold">Skip</button>
                            <button className="bg-royalPurple hover:bg-royalPurple/75 w-1/2 h-12 rounded-[6px] text-white font-bold">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}