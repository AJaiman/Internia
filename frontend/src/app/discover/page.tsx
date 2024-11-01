"use client"

import RecommendedPaper from "@/app/ui/discover/recommended-paper";
import RecommendedProfessor from "@/app/ui/discover/recommended-professor";
import { useState } from "react";
import { SearchResult } from "@/app/lib/types";
import { isLongformPublication } from "@/app/lib/utils";

export default function Page() {
    const [tab, setTab] = useState<"All" | "Papers" | "Professors">("All")
    
    // Change these after, just a placeholder to show the function
    const recommendedPaper = {
        name: "Effect of Chipotle on Obesity in the United States",
        authors: [{name: "Eric Huang", match: 0.97, university: "UMD"}, {name: "Eric Huang", match: 0.9, university: "UMD"}, {name: "Eric Huang", match: 0.82, university: "UMD"}],
        yearPublished: 2022,
        fullDate: "June 2022",
        link: "https://doi.org/oweariouwerio",
        abstract: "Many people have eaten Chipotle and became obesity shortly after. Unfortunately, obesity is an epidemic and the spread of Chipotle is concerning. This paper dives into how fat people who eat Chipotle are: Chipotle is very bad for the human body. Do not eat chiptotle",
        content: `
        Lorem ipsum odor amet, consectetuer adipiscing elit. Congue velit nascetur blandit aptent nisi. Dictum auctor ac ullamcorper fames porta. Metus tellus imperdiet est taciti nisl. Ornare laoreet urna dictumst varius interdum dolor ligula. Elit facilisi ac donec ipsum sagittis cursus. Nostra magnis cras potenti per nisl tincidunt. Dolor consectetur gravida mi congue leo fames ultrices senectus. Hendrerit sagittis lectus massa purus penatibus; etiam adipiscing litora primis? Eu habitasse velit urna ex arcu fusce erat taciti.

        Penatibus torquent eget nisi aenean habitant ridiculus diam. Dictum lorem erat hendrerit molestie aenean metus elementum? Ante tristique inceptos etiam porta vulputate nascetur odio. Elit quisque nisi elit placerat nisl ad. Cubilia suscipit litora dolor lobortis penatibus cras. Natoque enim natoque commodo ultricies ligula fames laoreet torquent finibus! Nostra sit fermentum nullam donec morbi malesuada luctus. Vehicula diam ex lacus nisi luctus blandit morbi. Dui class congue conubia facilisis integer consectetur ante ultrices.

        Lorem ipsum odor amet, consectetuer adipiscing elit. Congue velit nascetur blandit aptent nisi. Dictum auctor ac ullamcorper fames porta. Metus tellus imperdiet est taciti nisl. Ornare laoreet urna dictumst varius interdum dolor ligula. Elit facilisi ac donec ipsum sagittis cursus. Nostra magnis cras potenti per nisl tincidunt. Dolor consectetur gravida mi congue leo fames ultrices senectus. Hendrerit sagittis lectus massa purus penatibus; etiam adipiscing litora primis? Eu habitasse velit urna ex arcu fusce erat taciti.

Penatibus torquent eget nisi aenean habitant ridiculus diam. Dictum lorem erat hendrerit molestie aenean metus elementum? Ante tristique inceptos etiam porta vulputate nascetur odio. Elit quisque nisi elit placerat nisl ad. Cubilia suscipit litora dolor lobortis penatibus cras. Natoque enim natoque commodo ultricies ligula fames laoreet torquent finibus! Nostra sit fermentum nullam donec morbi malesuada luctus. Vehicula diam ex lacus nisi luctus blandit morbi. Dui class congue conubia facilisis integer consectetur ante ultrices.

        `,
        match: 0.98
    }

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

    const recommendedPapers = [recommendedPaper, recommendedPaper, recommendedPaper, recommendedPaper, recommendedPaper]
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