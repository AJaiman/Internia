import Paper from "@/app/ui/paper/paper";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    
    const isRecommendingPaper = true;  // Change later

    return (
        <>
            <Paper
                publication={{
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
                }}
                isRecommended={isRecommendingPaper} />
        </>
    )
}