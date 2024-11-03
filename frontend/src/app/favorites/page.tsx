"use client"

import { useState } from "react"
import Paginator from "@/app/ui/paginator"
import RecommendedPaper from "@/app/ui/discover/recommended-paper"
import RecommendedProfessor from "@/app/ui/discover/recommended-professor"
import { LongformProfessor, LongformPublication } from "@/app/lib/types"

export default function Page() {
    const [tab, setTab] = useState<"Papers" | "Professors">("Papers")

    // Placeholder that should be filled in later
    const viewedPaper: LongformPublication =
        {
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
    const viewedProfessor: LongformProfessor = { 
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

    const viewedPapers = Array.from({ length: 10 }, () => viewedPaper)
    const viewedProfessors = Array.from({ length: 10}, () => viewedProfessor)

    return (
        <div className="self-center flex flex-col w-[70.3%] gap-4 h-full mt-8">
            <h1 className="font-black text-4xl text-royalPurple">Recently Favorited</h1>
            <div className="flex flex-row h-10 gap-4">
                <button 
                  className={`text-lg text-royalPurple px-6 ${tab == 'Papers' ? 'border-b-2 border-royalPurple font-bold' : ''}`}
                  onClick={() => setTab("Papers")}>
                    Papers ({ viewedPapers.length })
                </button>
                <button 
                  className={`text-lg text-royalPurple px-6 ${tab == 'Professors' ? 'border-b-2 border-royalPurple font-bold' : ''}`}
                  onClick={() => setTab("Professors")}>
                    Professors ({ viewedProfessors.length })
                </button>
            </div>
            <div className="w-full h-full mt-4">
                <Paginator pageSize={4}>
                    { 
                        tab == 'Papers' 
                        ? viewedPapers.map((paper, index) => <RecommendedPaper key={index} publication={paper} addFavoriteButton={true} isFavorited={true}/>)
                        : viewedProfessors.map((professor, index) => <RecommendedProfessor key={index} professor={professor} addFavoriteButton={true} isFavorited={true} />)
                    }
                </Paginator>
            </div>
        </div>
    )
}