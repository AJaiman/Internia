import IndividualPaper from "@/app/ui/paper/individual-paper";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    
    const isRecommendingPaper = true;  // Change later

    return (
        <>
            <IndividualPaper
                publication={{
                    name: "Effect of Chipotle on Obesity in the United States",
                    authors: [{name: "Eric Huang", match: 0.97, university: "UMD"}, {name: "Eric Huang", match: 0.9, university: "UMD"}, {name: "Eric Huang", match: 0.82, university: "UMD"}],
                    yearPublished: 2022,
                    fullDate: "June 2022",
                    link: "https://doi.org/oweariouwerio",
                    abstract: "Many people have eaten Chipotle and became obesity shortly after. Unfortunately, obesity is an epidemic and the spread of Chipotle is concerning. This paper dives into how fat people who eat Chipotle are: Chipotle is very bad for the human body. Do not eat chiptotle",
                    content: "https://www.aclweb.org/anthology/N18-3011.pdf",
                    match: 0.98
                }}
                isRecommended={false} />
        </>
    )
}