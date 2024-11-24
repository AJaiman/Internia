import React from "react";
import Paper from "../ui/paper/paper";

export default function DashboardPage() {
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
                    content: "https://www.aclweb.org/anthology/N18-3011.pdf",
                    match: 0.98,
                    id: "649def34f8be52c8b66281af98ae884c09aef38b"
                }}
                isRecommended={true} />
        </>
    )
}